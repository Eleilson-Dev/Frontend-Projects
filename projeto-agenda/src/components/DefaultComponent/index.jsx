import { Header } from '../Header';

export const DefaultComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="conteiner">{children}</main>
    </>
  );
};
