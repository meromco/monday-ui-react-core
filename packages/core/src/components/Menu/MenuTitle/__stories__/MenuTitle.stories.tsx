import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../../storybook/functions/createStoryMetaSettingsDecorator";
import MenuTitle from "../MenuTitle";
import Menu from "../../Menu/Menu";
import MenuItem from "../../MenuItem/MenuItem";

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuTitle
});

export default {
  title: "Components/Menu/MenuTitle",
  component: MenuTitle,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const menuTitleTemplate = createComponentTemplate(MenuTitle);

export const Overview = {
  render: menuTitleTemplate.bind({}),
  name: "Overview",

  args: {
    caption: "Menu title"
  }
};

export const CaptionPlacements = {
  render: () => [
    <Menu key="top">
      <MenuTitle caption="Top caption" captionPosition="top" />
      <MenuItem title="Menu item" />
    </Menu>,
    <Menu key="center">
      <MenuTitle caption="Center caption" captionPosition="center" />
      <MenuItem title="Menu item" />
    </Menu>
  ],
  name: "Caption placements"
};
