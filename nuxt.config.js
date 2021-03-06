export default {
  head: {
    title: "Clean UI: The cleanest UI library",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "The cleanest UI library for HTML, CSS and JavaScript on your websites." }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  components: false,
  css: [
    "~/assets/globals.css"
  ],
  styleResources: {
    scss: [
      "~/assets/variables.scss"
    ]
  },
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources"
  ],
  build: {
    vendor: ["~/library/clean-ui.js"]
  }
}
