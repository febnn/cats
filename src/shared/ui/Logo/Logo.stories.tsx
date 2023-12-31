import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Logo',
  component: Logo,
  parameters: {},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
