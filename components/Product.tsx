import { Product } from '@models/product';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ProductProps {
  product: Product;
  children?: ReactNode;
}

const ProductContainer = styled.div`
  // Product container styles go here
`;

const ProductImage = styled.img`
  // Product image styles go here
`;

const ProductTitle = styled.h3`
  // Product title styles go here
`;

const ProductPrice = styled.p`
  // Product price styles go here
`;

const Product = ({ product, children }: ProductProps) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      {children}
    </ProductContainer>
  );
};

export default Product;
