import styles from './styles.module.scss';
import { FormLogin } from '../../components/FormLogin';

export const LoginPage = () => {
  return (
    <section className={styles.loginBox}>
      <h1>Entrar</h1>
      <p>Faca login da sua conta abaixo</p>

      <FormLogin />
    </section>
  );
};
