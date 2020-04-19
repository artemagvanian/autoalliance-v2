const functions = require("firebase-functions");
const sharp = require("sharp");
const admin = require("firebase-admin");
const path = require("path");
const os = require("os");
const fs = require("fs");

admin.initializeApp();

exports.generateThumbnail = functions.storage
  .object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket;
    const filePath = object.name;
    const contentType = object.contentType;

    if (!contentType.startsWith("image/")) {
      return console.log("This is not an image.");
    }

    const fileName = path.basename(filePath);
    if (fileName.startsWith("thumb_")) {
      return console.log("Already a Thumbnail.");
    }

    const bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);
    const metadata = {
      contentType: contentType,
    };

    await bucket.file(filePath).download({ destination: tempFilePath });
    console.log("Image downloaded locally to", tempFilePath);

    const tempThumbFilePath = `${tempFilePath}_thumb`;

    await sharp(tempFilePath).resize(500, 500).toFile(tempThumbFilePath);

    console.log("Thumbnail created at", tempThumbFilePath);

    const thumbFileName = `thumb_${fileName}`;
    const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);

    await bucket.upload(tempThumbFilePath, {
      destination: thumbFilePath,
      metadata: metadata,
    });

    fs.unlinkSync(tempFilePath);
    return fs.unlinkSync(tempThumbFilePath);
  });
