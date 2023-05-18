import React from 'react';
import cx from 'classnames';

type Props = {
  count: number;
  className?: string;
};

const Badge: React.FC<Props> = ({ count, className }) => {
  return (
    <div
      className={cx(
        'w-5 h-5 rounded-full bg-red-500 text-white flex justify-center items-center text-xs text-center font-semibold',
        className
      )}
    >
      {count}
    </div>
  );
};

export default Badge;
