import Badge from '@app/design-system/Badge';
import { useCart } from '@context/CartContext';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar: React.FC<Props> = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();
  return (
    <nav className="flex h-16 bg-green-200 px-8 py-2 justify-between items-center sticky top-0">
      <div className="logo font-bold uppercase cursor-pointer text-2xl">
        <Link href={'/'}>Hero Go</Link>
      </div>

      <div className="cart-icon relative">
        <Badge
          count={cartItems.length}
          className="absolute -top-2 -right-4"
        ></Badge>
        <Link href={'/shopping-cart'}>My Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
