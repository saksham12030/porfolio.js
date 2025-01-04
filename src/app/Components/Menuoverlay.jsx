import React from "react";
import NavLink from "./NavLink";
const Menuoverlay = ({ link }) => {
  return (

    <>
      <div className="flex flex-col py-4 items-center ">
        {link.map((link, index) => {
          return (
            <li className="list-none" key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Menuoverlay;
