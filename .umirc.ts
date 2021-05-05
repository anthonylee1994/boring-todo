import { defineConfig } from "umi";

export default defineConfig({
  base: "./",
  publicPath: "./",
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  pwa: {
    src: "./manifest.json",
    hash: true,
  },
  locale: {
    default: "en-US",
    antd: false,
  },
  nodeModulesTransform: {
    type: "none",
  },
  title: "\u60b6\u4e8b\u9805\u6e05\u55ae",
  fastRefresh: {},
  theme: {
    "primary-color": "#faad14",
  },
});
