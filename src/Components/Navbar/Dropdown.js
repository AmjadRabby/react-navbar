import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";
// import MenuItem from "./MenuItem";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // console.log(MenuItem);
  return (
    
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu "}
      >
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                  {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
