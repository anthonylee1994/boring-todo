import { defineConfig } from "umi";

export default defineConfig({
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  pwa: {
    src: "manifest.json",
    hash: true,
  },
  locale: {
    default: "en-US",
    antd: false,
  },
  nodeModulesTransform: {
    type: "none",
  },
  fastRefresh: {},
  theme: {
    "primary-color": "#faad14",
  },
});
