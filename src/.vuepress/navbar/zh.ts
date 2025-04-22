import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/portfolio",
  {
    text: "技术",
    icon: "code",
    link: "/technology/",  // 末尾的斜杠很重要，它会自动指向文件夹的 README.md
  },
  {
    text: "雅思",
    icon: "book",
    link: "/lelts/",  // 末尾的斜杠很重要，它会自动指向文件夹的 README.md
  },
  {
    text: "摄影",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "相机相关",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "123", icon: "lightbulb", link: "" }],
      },
      {
        text: "调色",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "456", icon: "lightbulb", link: "" }],
      },
    ],
  },
  {
    text: "软件教程",
    icon: "book",
    prefix: "/software/",
    children: [
      {
        text: "Mybatis",
        icon: "lightbulb",
        link: "1.md"
      },
      {
        text: "Java",
        icon: "lightbulb",
        link: "2.md"
      },
    ],
  },
]);
