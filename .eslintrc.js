module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["vue"],
};
