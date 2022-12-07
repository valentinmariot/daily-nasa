import { FC } from 'react';
import './Navbar.scss';

interface INavbar {
    children?: React.ReactNode;
};

const Navbar: FC<INavbar> = ({ children }) => {
  return (
    <div className="navbar">
        <nav className="navbar-links">
            {children}
        </nav>
    </div>
  );
};

export default Navbar;
