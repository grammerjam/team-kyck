import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import LandingPage from './components/LandingPage/LandingPage';
import SignPage from './components/SignupPage/SignupPage';
import WatchPage from './components/WatchPage/WatchPage';
import { UserProvider, useUser } from './context/User';
import { useEffect, useState } from 'react';

function Layout() {

  const { restoreUser } = useUser();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    restoreUser(setIsLoaded);
  }, [restoreUser]);
    
  return (
    <>
      {isLoaded && <Outlet />}
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
      {
        path: '/watch',
        element: <WatchPage/>
      },
      {
        path:'/watch/:id',
        element: <WatchPage/>
      },
    ]
  }
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;