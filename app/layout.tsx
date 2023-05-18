'use client';

import Navbar from '@components/Navbar';
import '@styles/globals.css';
import StyledComponentsRegistry from './registry';
import { CartProvider } from '@context/CartContext';

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <main className="app">
              <Navbar />
              <div className="px-8 py-4">{children}</div>
            </main>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
