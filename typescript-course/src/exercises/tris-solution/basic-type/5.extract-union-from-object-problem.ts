const complexObj = {
  javascript: {
    label: "Javascript",
  },
  typescript: {
    label: "Typescript",
  },
  reactjs: {
    label: "Reactjs",
  },
};
type ComplexObj = keyof typeof complexObj;
// Expected: type ComplexObj = "javascript" | "typescript" | "reactjs"
export {};
