import styles from './styles.module.scss';
import { ContactsList } from '../../components/ContactsList';

export const ContactPage = () => {
  return (
    <section className={styles.section}>
      <h1>Agenda</h1>
      <p>Seus contatos estão abaixo</p>

      <ContactsList />
    </section>
  );
};
