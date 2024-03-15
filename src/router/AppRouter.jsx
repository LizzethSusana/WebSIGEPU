import React, { useContext } from 'react'
import SignInPage from '../module/auth/SingInpage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AuthContext from '../config/context/auth-context';
import AdminLayout from '../module/admin/AdminLayout';
import Temporal from '../components/Temporal';
import Inventary from '../module/admin/inventary/Inventary'

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
              <Route path='home' element={<>Inicio</>} />
              <Route path='inventary' element={<Inventary/>} />
              <Route path='orders' element={<>Pedidos</>} />
              <Route path='clients' element={<Temporal />} />
              <Route path='workers' element={<>Trabajares</>} />
            </Route>
          ) : <Route path='/*' element={<SignInPage />} />
        }
      </>)
  );
  return <RouterProvider router={router} />;
};

export default AppRouter