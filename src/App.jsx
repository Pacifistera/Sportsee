import { Outlet } from 'react-router-dom';
import Header from './components/header';

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
