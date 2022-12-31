import type { Meta, StoryObj } from "@storybook/react";

import { Editor } from "./Editor";

export default {
  component: Editor,
} satisfies Meta<typeof Editor>;

export const Default: StoryObj<typeof Editor> = {};
