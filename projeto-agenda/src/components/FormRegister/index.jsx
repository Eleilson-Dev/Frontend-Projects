import styles from './styles.module.scss';

import { Input } from '../../fragments/Input';
import { Button } from '../../fragments/Button';

export const FormRegister = () => {
  return (
    <form className={styles.formBox}>
      <Input
        id="email"
        label="Seu e-mail"
        type="email"
        placeholder="Digite seu e-mail"
      />
      <Input
        id="password"
        label="Sua senha"
        type="password"
        placeholder="Digite sua senha"
      />
      <Button type="submit" text="Criar minha conta" />
    </form>
  );
};
