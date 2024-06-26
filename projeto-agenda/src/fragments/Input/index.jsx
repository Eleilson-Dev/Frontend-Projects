import styles from './styles.module.scss';

export const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};
