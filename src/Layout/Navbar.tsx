import { Link } from "react-router-dom";
import { useState, type JSX,} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CartIcon from "../components/CartIcon";

type Page = {
  name: string | JSX.Element;
  Link: string;
};

const Pages: Page[] = [
  { name: "HOME", Link: "/" },
  { name: "ADDPRODUCT", Link: "/Addproduct" },
  { name: "BLOG", Link: "/Blog" },
  { name: <CartIcon />, Link: "/cart" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full  z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="font-bold">MyApp</div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 items-center ">
            {Pages.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.Link}
                  className="hover:border-b-2 hover:border-yellow-400 transition-all duration-200 font-semibold text-[14px] text-white hover:text-yellow-300 pb-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu list */}
      {isOpen && (
        <ul className="md:hidden w-full bg-white px-4 py-3 rounded-b-xl shadow-lg animate-fade-down space-y-2 transition-all duration-300 ease-in-out">
          {Pages.map((item, index) => (
            <li key={index}>
              <Link
                to={item.Link}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-black hover:bg-blue-600 hover:text-yellow-300 transition duration-200"
                onClick={() => setIsOpen(false)} // Close on click
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
