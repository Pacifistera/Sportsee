import { Outlet } from 'react-router-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header2';
import Aside from './components/Aside';
import Home from './page/Home';
import './styles/app.scss';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/404',
        element: <p>Error404</p>,
      },
    ],
  },
]);

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Aside />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
