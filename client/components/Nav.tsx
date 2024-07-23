import { Link } from 'react-router-dom';
import BasicImage from '../../public/images/Proyo/Basic.png';

const NavBar = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex my-5 text-brand-400 items-center">
          <Link to="/">
            <h1>Proyo</h1>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-400">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;