module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  ignorePatterns: [
    "nuxt.config.js",
    ".eslintrc.js"
  ],
  rules: {
    "prettier/prettier": "warn"
  }
}
