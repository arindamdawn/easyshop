import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cx(className, 'rounded-md px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
