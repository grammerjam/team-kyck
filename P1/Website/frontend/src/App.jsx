import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import LandingPage from './components/LandingPage/LandingPage';
import SignPage from './components/SignupPage/SignupPage';

function Layout() {

  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/landing',
        element: <LandingPage/>
      },

      {
        path: '/signup',
        element: <SignPage/>
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;