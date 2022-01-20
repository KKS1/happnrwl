import { Story, Meta } from '@storybook/react';
import { SharedUiLayout, SharedUiLayoutProps } from './shared-ui-layout';

export default {
  component: SharedUiLayout,
  title: 'SharedUiLayout',
} as Meta;

const Template: Story<SharedUiLayoutProps> = (args) => (
  <SharedUiLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
