const color = [
  "white",
  "Black",
  "Red",
  "maroon",
  "Beinge",
  "Pink",
  "Green",
  "Yellow",
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "red", label: "Red" },
      { value: "maroon", label: "Maroon" },
      { value: "beige", label: "Beige" },
      { value: "pink", label: "Pink" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

const singleFilter = [

  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-500", label: "0-500" },
      { value: "500-1000", label: "500-1000" },
      { value: "1000-1500", label: "1000-1500" },
      { value: "1500-2000", label: "1500-2000" },
      { value: "2000-2500", label: "2000-2500" },
    ],
  },
  {
    id: "discount",
    name: "Discount RANGE",
    options: [
      { value: "10", label: "10% And Above" },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "inStock", label: "In Stock" },
      { value: "outOfStock", label: "Out Of Stock" },
    ],
  },
];

// 👇 Export all as a single default object
export default {
  color,
  filters,
  singleFilter,
};
