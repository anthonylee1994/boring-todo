import { defineConfig } from "umi";

export default defineConfig({
  base: "./",
  publicPath: "./",
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  favicon: "./icon-48x48.png",
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
  title: "悶事項清單",
  fastRefresh: {},
  theme: {
    "primary-color": "#faad14",
  },
});
