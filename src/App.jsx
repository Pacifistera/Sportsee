import { Outlet } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Header from './components/Header2';
import Aside from './components/Aside';
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
