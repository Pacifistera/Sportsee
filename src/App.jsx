import { Outlet } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Header from './components/Header';
import Home from './page/Home';
import './styles/app.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
