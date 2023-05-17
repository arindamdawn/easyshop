import Badge from '@app/design-system/Badge';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="flex h-16 bg-green-200 px-8 py-2 justify-between items-center">
      <div className="logo font-bold uppercase cursor-pointer text-2xl">
        <Link href={'/'}>Easy Shop</Link>
      </div>

      <div className="cart-icon relative">
        <Badge count={0} className="absolute -top-2 -right-4"></Badge>
        <Link href={'/shopping-cart'}>My Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
