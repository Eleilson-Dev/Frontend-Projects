import { ContactItem } from '../ContactItem';
import styles from './styles.module.scss';

export const ContactsList = () => {
  return (
    <ul className={styles.list}>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </ul>
  );
};
