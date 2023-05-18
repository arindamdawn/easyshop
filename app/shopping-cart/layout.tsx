import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Shopping Cart',
  description: 'The coolest e-commerce store!',
};

const layout: React.FC<Props> = ({ children }) => {
  return <div className='lg:px-8 py-4'>{children}</div>;
};

export default layout;
