export default {
  title: "Thickness Gauge",
  name: "thicknessGauge",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Old Price",
      name: "oldPrice",
      type: "number",
    },
    {
      title: "New Price",
      name: "newPrice",
      type: "number",
    },

    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Availability",
      name: "availability",
      type: "string",
    },
    {
      title: "Short Description",
      name: "shortDescription",
      type: "text",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Photos",
      name: "photos",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
