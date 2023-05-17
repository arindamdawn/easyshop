import { mockProducts } from '@mock/products';
import styled from 'styled-components';
import Product from './Product';

const products = mockProducts;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2rem;
`;

const ProductList = () => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <Product key={product.id} product={product}>
          {/* Additional child components or elements */}
        </Product>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
