import { FC, Children, ReactNode, useState } from 'react';
import './Navbar.scss';

interface INavbar {
    children?: React.ReactNode;
};

const Navbar: FC<INavbar> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('isOpen', isOpen);

  return (
    <div className="navbar">
      <div className="inside">
        <div className="float">
          <div className="menu">
            <div className={`menuMobile${isOpen
                ? 'Open'
                : 'Closed'}
            `}>
              {children}
            </div>
            <div className="menuButton">
              <button
                className={`dnButton menuButton
                  ${isOpen
                    ? 'Open'
                    : 'Closed'}
                `}
                onClick={() => setIsOpen(!isOpen)}
              >
                <p className={`dn dn${isOpen
                    ? 'Open'
                    : 'Closed'}
                  `}>
                    DAILY NASA
                  </p>
              </button>
            </div>
            <div className="menuRight">
              <ul className="menuRightLinks">
                {Children.map(children, (child: ReactNode) =>
                  <li className="linkBox">
                      {child}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
