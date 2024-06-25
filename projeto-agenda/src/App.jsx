import { ContactsSection } from './components/ContactsSection';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className="conteiner">
        <ContactsSection />
      </main>
    </>
  );
};

export default App;
