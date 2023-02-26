import { Routes, Route} from 'react-router-dom';

import Layout from './Layout';
import { PublicRoute } from './authRoutes/PublicRoute';
import { PrivateRoute } from './authRoutes/PrivateRoute';
import HomePage from '../pages/HomePage';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
        <Route path="" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>  
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
