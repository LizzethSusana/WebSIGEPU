import React, { useContext } from 'react'
import SignInPage from '../module/auth/SingInpage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AuthContext from '../config/context/auth-context';
import AdminLayout from '../module/admin/AdminLayout';
import Temporal from '../components/Temporal';
import Clientes from '../components/Clientes';
import Trabajadores from '../components/Trabajadores';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        {
          // publico
        }
        {
          user.signed ? (
            <Route path='/' element={<AdminLayout />}>
              <Route path='temporal' element={<Temporal />} />
              <Route path='clientes' element={<Clientes />} />
              <Route path='trabajadores' element={<Trabajadores/>} />
              <Route path='products' element={<>Productos</>} />
            </Route>
          ) : <Route path='/*' element={<SignInPage />} />
        }
      </>)
  );
  return <RouterProvider router={router} />;
};

export default AppRouter