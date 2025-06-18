import { Link } from "react-router-dom";
import { useEffect, useRef, useState, type JSX } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CartIcon from "../components/CartIcon";
import { RxAvatar } from "react-icons/rx";
import { Logout } from "../Services/Logout";
import Searchbar from "../components/Searchbar";
import Logo from "../assets/LOgo.jpg"


type Page = {
  name: string | JSX.Element;
  Link: string;
};

function Navbar() {
  const getemail = localStorage
    .getItem("userEmail")
    ?.slice(0, 5)
    .toLocaleUpperCase();

  const isLoggedIn = !!localStorage.getItem("userEmail");

  const Pages: Page[] = [
    { name: "HOME", Link: "/" },
    { name: "ADDPRODUCT", Link: "/Addproduct" },
    ...(!isLoggedIn ? [{ name: "LOGIN", Link: "/Login" }] : []),
    { name: <CartIcon />, Link: "/cart" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex justify-center items-center gap-4">
          <img src={Logo} alt="" className=" w-8 h-8   sm:w-10 sm:h-10 rounded-full " />
           <div className="hidden md:block ">
             <p className="text-[20px] font-serif  "  >Shopora</p>
             <p className="text-[10px]">Everything You Need One Click Away</p>
           </div>
          </div>
          <div><Searchbar/></div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 items-center">
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

            {/* Dropdown menu */}
            <div className="relative text-left" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="p-2 flex items-center gap-2"
              >
                <RxAvatar className="text-lg" />
                {getemail && <p>{getemail}</p>}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-2 mt-[16px] w-40 bg-gray-500 border border-gray-200 shadow-lg  z-50 text-white">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-900"
                    onClick={Logout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu list */}
      {isMobileMenuOpen &&(
        <ul className="md:hidden w-full bg-white px-4 py-3 rounded-b-xl shadow-lg animate-fade-down space-y-2 text-black transition-all duration-300 ease-in-out">
          {Pages.map((item, index) => (
            <li key={index}>
              <Link
                to={item.Link}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-black hover:bg-blue-600 hover:text-yellow-300 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
          <button
            className="w-full text-left px-3 py-2 hover:bg-blue-600"
            onClick={Logout}
          >
            LOGOUT
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
