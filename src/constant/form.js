const formJson = [
  {
    type: "text",
    label: "Full Name",
    validation: "text",
    min: 6,
    max: 50,
  },
  {
    type: "number",
    label: "Age",
    validation: "number",
    min: 18,
    max: 100,
  },
  {
    type: "checkbox",
    mode: "single",
    label: "Gender",
  },
  {
    type: "checkbox",
    mode: "group",
    groupLabel: ["Male", "Female"],
    label: "Gender",
  },
  {
    type: "select",
    options: ["Bangalore", "Jaipur", "Delhi"],
    label: "City",
  },
];

export default formJson;
