import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

import Menu from "../menu/menu";

import "./NavBar.scss";

const Navbar = () => {
  const [mobile, setmobile] = useState(false);

  const handleClickMenu = () => {
    setmobile(!mobile);
  };
  const menuItems = [
    {
      id: 1,
      link: "ABOUT",
      url: "#",
    },
    {
      id: 2,
      link: "CAREERS",
      url: "#",
    },
    {
      id: 3,
      link: "EVENTS",
      url: "#",
    },
    {
      id: 4,
      link: "PRODUCTS",
      url: "#",
    },
    {
      id: 5,
      link: "SUPPORT",
      url: "#",
    },
  ];
  return (
    <nav className=" ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="text-left p-10 text-2xl font-extrabold whitespace-nowrap dark:text-white">
            Loopstudios
          </span>
        </Link>
        <button type="button" onClick={handleClickMenu}>
          <FaBars className="inline-flex items-center w-10 p-1 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
        </button>
        {mobile && <Menu />}
        <div className="hidden w-full sm:block sm:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:pr-20 mt-4 bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent">
            {menuItems.map((element) => (
              <li key={element.id}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {element.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
