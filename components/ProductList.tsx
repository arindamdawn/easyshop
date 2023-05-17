import { mockProducts } from '@mock/products';
import styled from 'styled-components';
import Product from './Product';
import Button from '@app/design-system/Button';
import { useCart } from '@context/CartContext';
import { Product as ProductType } from '@models/product';

const products = mockProducts;

const ProductListContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ProductList = () => {
  const { addToCart } = useCart();
  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };
  return (
    <ProductListContainer className="flex-col md:flex-row">
      {products.map((product) => (
        <Product key={product.id} product={product}>
          <Button onClick={() => handleAddToCart(product)} className="mt-2">
            Add to Cart
          </Button>
        </Product>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
