export default {
  title: "Car for Sale",
  name: "carForSale",
  type: "document",
  fields: [
    { title: "Brand", name: "brand", type: "string" },
    { title: "Model", name: "model", type: "string" },
    { title: "Manufacturing Year", name: "manufacturingYear", type: "number" },
    {
      title: "Engine Displacement",
      name: "engineDisplacement",
      type: "string",
    },
    { title: "Mileage", name: "mileage", type: "number" },
    { title: "Gearbox", name: "gearbox", type: "string" },
    { title: "Fuel type", name: "fuelType", type: "string" },
    { title: "Drive type", name: "driveType", type: "string" },
    { title: "Price", name: "price", type: "number" },
    { title: "Description", name: "description", type: "text" },
    { title: "Photos", name: "photos", type: "array", of: [{ type: "image" }] },
    { title: "Sold", name: "sold", type: "boolean" },
  ],
};
