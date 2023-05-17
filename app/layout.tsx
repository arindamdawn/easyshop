import Navbar from '@components/Navbar';
import '@styles/globals.css';
import StyledComponentsRegistry from './registry';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'EasyShop',
  description: 'The coolest e-commerce store!',
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
