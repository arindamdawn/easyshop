import React from 'react';
import cx from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cx(
        'p-2 rounded-md border border-gray-200 shadow-sm bg-white',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
