import Card from '@app/design-system/Card';
import { Product } from '@models/product';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ProductProps {
  product: Product;
  children?: ReactNode; 
}

const ProductContainer = styled.div``;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductTitle = styled.h3``;

const ProductPrice = styled.p``;

const Product = ({ product, children }: ProductProps) => {
  return (
    <Card className="hover:shadow-md w-full md:w-1/2 lg:w-1/6">
      <ProductContainer>
        <ProductImage src={product.image} alt={product.title} />
        <ProductTitle className='font-xl font-semibold mt-1'>{product.title}</ProductTitle>
        <ProductPrice className='mt-1'>${product.price}</ProductPrice>
        {children}
      </ProductContainer>
    </Card>
  );
};

export default Product;
