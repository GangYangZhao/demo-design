import React, { useMemo } from 'react';
import type { ReactNode } from 'react';

export interface ButtonProps {
  /** 将按钮宽度调整为其父宽度的选项 */
  block?: boolean;
  /** 设置危险按钮 */
  danger?: boolean;
  /** 设置按钮失效状态 */
  disabled?: boolean;
  /** 幽灵属性，使按钮背景透明 */
  ghost?: boolean;
  /** 点击跳转的地址，指定此属性 button 的行为 和 a 连接一致  */
  href?: string;
  /** 设置 `button` 原生的 `type 值`，可选值参考 HTML 标准 */
  htmlType?: string;
  /** 设置按钮的图标组件 */
  icon?: ReactNode;
  /** 设置按钮载入状态 */
  loading?: boolean | { delay: number };
  /** 设置按钮形状 */
  shape?: 'default' | 'circle' | 'round';
  /** 设置按钮大小 */
  size?: 'large' | 'middle' | 'small';
  /** 样式 */
  styles?: React.CSSProperties;
  /** 相当于 a 链接的 target 属性，href 存在时生效 */
  target?: string;
  /** 设置按钮类型 */
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  /** 子节点 */
  children?: ReactNode;
  /** 点击按钮时的回调 */
  onClick?: (event: MouseEvent) => void;
}

const Button = (props: ButtonProps) => {
  const { href, target, icon, children } = props;

  const innerContent = useMemo(() => {
    return (
      <>
        {icon}
        {children}
      </>
    );
  }, [icon, children]);

  if (href) {
    return (
      <a href={href} target={target}>
        {innerContent}
      </a>
    );
  }

  return (
    <button>{innerContent}</button>
  );
};

Button.display = 'Button';
export default Button;
