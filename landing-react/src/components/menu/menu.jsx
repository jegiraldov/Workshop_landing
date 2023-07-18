import React from "react";
import "./menu.scss";
const Menu = () => {
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
    <>
      <ul className="links active max-w-lg justify-center text-center flex content-center">
        {menuItems.map((link) => (
          <li key={link.id} className="links__li">
            <a href={link.url} className="links__a">
              {link.link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
