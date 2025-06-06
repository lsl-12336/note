import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "" : "structure",
  "portfolio": "structure",
  "/technology/":[
    {
      text: "Java",
      icon: "laptop-code",
      prefix: "demo/",
      collapsible: true,
      // link: "demo/",
      children: "structure",
    },
    {
      text: "Python",
      icon: "laptop-code",
      prefix: "demo1/",
      collapsible: true,
      // link: "demo/",
      children: "structure",
    },
  ],
  "/lelts/": [

    {
      text: "listening",
      icon: "laptop-code",
      prefix: "listening/",
      collapsible: true,
      // link: "demo/",
      children: "structure",
    },
    {
      text: "reading",
      icon: "laptop-code",
      prefix: "reading/",
      collapsible: true,
      // link: "demo/",
      children: "structure",
    },
    {
      text: "speaking",
      icon: "laptop-code",
      prefix: "speaking/",
      collapsible: true,
      // link: "demo/",
      children: "structure",
    },
    {
      text: "writing",
      icon: "laptop-code",
      prefix: "writing/",
      collapsible: true,
      // link: "demo/",
      children: "structure",
    },

    {
      text: "grammar",
      icon: "laptop-code",
      prefix: "grammar/",
      collapsible: true,
      // link: "demo/",
      children: "structure",
    },

  ],
  // [
  //   {
  //     text: "案例",
  //     icon: "laptop-code",
  //     prefix: "technology/",
  //     collapsible: true,
  //     // link: "demo/",
  //     children: "structure",
  //   },

  //   // {
  //   //   text: "幻灯片",
  //   //   icon: "person-chalkboard",
  //   //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
  //   // },
  // ],
  "/photography/": [

    {
      text: "摄影后期处理教程",
      icon: "book",
      prefix: "wushi/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "调色",
      icon: "book",
      prefix: "shiyue/",
      children: "structure",
      collapsible: true,
    },
  ],
// "/zh/guide/": "structure",
// [
//   {
//     text: "指南",
//     children: [
//       {
//         text: "Bar",
//         link: "/zh/guide/bar/"
//       },
//       {
//         text: "Foo",
//         link: "/zh/guide/foo/"
//       }
//     ]
//   }
// ],

});
