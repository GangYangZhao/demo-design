import type { Meta, StoryObj } from '@storybook/react'
import Button from './button';
import type { ButtonProps } from './button'

const meta: Meta<ButtonProps> = {
  title: 'Core/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<ButtonProps>


export const Secondary = {
  args: {
    children: 'Button'
  }
};

export const Large = {
  args: {
    size: 'large',
    children: 'Button'
  }
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button'
  }
};
