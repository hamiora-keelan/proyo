import { Outlet } from 'react-router-dom';
import NavBar from './Nav';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;