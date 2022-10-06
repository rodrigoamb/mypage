import React from "react";

//styles
import { ContainerMenu } from "./MenuStyles";

//react router dom
import { NavLink } from "react-router-dom";

//hooks react
import { useEffect } from "react";

//react icons
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Menu = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <ContainerMenu menuIsVisible={menuIsVisible}>
      <IoMdClose
        className="icon-close"
        onClick={() => setMenuIsVisible(false)}
      />

      <ul className="content-ul">
        <li>
          <NavLink
            className="btn-nav"
            to={"/"}
            onClick={() => setMenuIsVisible(false)}
          >
            Sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink
            className="btn-nav"
            to={"/portfolio"}
            onClick={() => setMenuIsVisible(false)}
          >
            Portfólio
          </NavLink>
        </li>
        <li>
          <NavLink
            className="btn-nav"
            to={"/contato"}
            onClick={() => setMenuIsVisible(false)}
          >
            Contato
          </NavLink>
        </li>
      </ul>

      <div className="container-icons">
        <a
          className="icon"
          href="https://www.instagram.com/rodrigomedeiros.b"
          target={"blank"}
        >
          <FaInstagram />
        </a>
        <a
          className="icon"
          href="https://github.com/rodrigoamb"
          target={"blank"}
        >
          <FaGithub />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/rodrigomedeirosdev/"
          target={"blank"}
        >
          <FaLinkedinIn />
        </a>
      </div>
    </ContainerMenu>
  );
};

export default Menu;
