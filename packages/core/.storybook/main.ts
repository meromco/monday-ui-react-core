import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const getAddons = () => {
  const addons = [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    },
    "@storybook/addon-themes",
    "@storybook/preset-scss",
    "storybook-addon-playground",
    "@chromatic-com/storybook",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ];

  if (process.env.NODE_ENV !== "production") {
    addons.push("@storybook/addon-interactions");
  }

  return addons;
};

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: getAddons(),
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript"
  },
  staticDirs: ["./static"],
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      resolve: {
        alias: {
          "monday-ui-style/dist/index.min.css": path.resolve(__dirname, "../../style/src/index.scss"),
          "monday-ui-style/dist": path.resolve(__dirname, "../../style/src"),
          // mixins workaround for vite:
          "~monday-ui-style/dist/mixins": path.resolve(__dirname, "../../style/src/mixins"),
          "~monday-ui-style/dist/functions": path.resolve(__dirname, "../../style/src/functions"),
          "~monday-ui-style": path.resolve(__dirname, "../../style"),
          "~vibe-storybook-components": path.resolve(__dirname, "../../storybook-blocks")
        }
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify("development")
      }
    });
  }
} satisfies StorybookConfig;
