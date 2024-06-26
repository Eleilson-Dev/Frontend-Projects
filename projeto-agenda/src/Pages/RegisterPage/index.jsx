import styles from './styles.module.scss';
import { FormRegister } from '../../components/FormRegister';

export const RegisterPage = () => {
  return (
    <section className={styles.registerBox}>
      <h1>Criar conta</h1>
      <p>Crier sua conta abaixo</p>

      <FormRegister />
    </section>
  );
};
