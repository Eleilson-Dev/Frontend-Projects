import styles from './styles.module.scss';

export const Button = ({ type, text }) => {
  return (
    <button className={styles.buttonBox} type={type}>
      {text}
    </button>
  );
};
