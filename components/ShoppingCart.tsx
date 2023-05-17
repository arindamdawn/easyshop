'use client';

import React from 'react';
import CartItem from './CartItem';
import { useCart } from '@context/CartContext';
import Button from '@app/design-system/Button';
import Link from 'next/link';

type Props = {};

const ShoppingCart: React.FC<Props> = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();
  return (
    <div className="p-4 bg-white rounded-lg">
      <ul className="space-y-4">
        {cartItems.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}

        {!cartItems.length && (
          <div className="flex flex-col items-center space-x-4 gap-6">
            <h3 className="text-2xl font-bold">No items</h3>
            <p>There are no items in your cart! </p>
            <Link href={'/'} className="mt-2">
              <Button>Shop Items</Button>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ShoppingCart;
