import Button from '@app/design-system/Button';
import Card from '@app/design-system/Card';
import { useCart } from '@context/CartContext';
import { Product } from '@models/product';
import Image from 'next/image';
import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

type Props = {
  product: Product;
};

const CartItem: React.FC<Props> = ({ product }) => {
  const { removeFromCart } = useCart();
  const { title, price, image, id } = product;
  return (
    <Card className="shadow-md">
      <li className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            className="w-24 h-24 rounded"
            src={image}
            alt={title}
            width={200}
            height={200}
          />
          <div>
            <p className="font-semibold text-lg">{title}</p>
            <p>${price}</p>
          </div>
        </div>
        <Button className="bg-white hover:bg-white" onClick={() => removeFromCart(id)}>
          <TrashIcon className="text-gray-800 h-8 w-8" title="Delete Item" />
        </Button>
      </li>
    </Card>
  );
};

export default CartItem;
