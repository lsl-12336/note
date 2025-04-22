import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.Lu",
      description: "vuepress-theme-hope 的文档演示",
    },
    "/en/": {
      lang: "en-US",
      title: "Mr.Lu",
      description: "A docs demo for vuepress-theme-hope",
    },

  },


  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
