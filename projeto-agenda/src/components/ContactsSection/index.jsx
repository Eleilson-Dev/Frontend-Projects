import { ContactsList } from '../ContactsList';
import styles from './styles.module.scss';

export const ContactsSection = () => {
  return (
    <section className={styles.section}>
      <h1>Agenda</h1>
      <p>Seus contatos estão abaixo</p>

      <ContactsList />
    </section>
  );
};
