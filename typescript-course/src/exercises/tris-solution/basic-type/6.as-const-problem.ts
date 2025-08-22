export const programingLanguages = {
  JAVASCRIPT: "javascript",
  REACTJS: "reactjs",
  PHP: "php",
  PYTHON: "python",
  VUE: "vue",
  RUBY: "ruby",
} as const;
export type JavascriptLanguage = (typeof programingLanguages)["PHP"];
console.log()