import styles from './styles.module.scss';

export const ContactItem = () => {
  return (
    <li className={styles.contactItem}>
      <span>Mxt@DEV</span>
      <span>Developer</span>
      <span>00.00.00-00</span>
      <span>mxtdev@gmail.com</span>
    </li>
  );
};
