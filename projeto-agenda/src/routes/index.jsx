import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import { ContactPage } from '../Pages/ContactPage';
import { RegisterPage } from '../Pages/RegisterPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/contacts" element={<ContactPage />} />
    </Routes>
  );
};
