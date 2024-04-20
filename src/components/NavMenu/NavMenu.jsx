import { IconMenu2 } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { routes } from "../../libs/routes";
import Logo from "../../assets/logo.svg";
import { Navbar } from "./Navbar/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Register } from "../Register/Register";

export const NavMenu = () => {
  const [nav, setNav] = useState(false);

  const changeNavbar = () => {
    setNav(!nav);
  };

  const MySwal = withReactContent(Swal);

  const showLoginModal = () => {
    return MySwal.fire(<Register />);
  };
  return (
    <>
      <header className="flex items-center px-10 justify-between py-3 border-b border-neutral-700 bg-dark-grays">
        {/*====Logo section====*/}
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 rounded-md" src={Logo} alt="logo" />
          <p className="text-neutral-200 uppercase font-medium text-sm">
            Hello Word
          </p>
        </div>

        {/*====Desktop navbar section====*/}
        <div className="max-table_md:hidden">
          <Navbar routes={routes} />
        </div>

        <button
          onClick={changeNavbar}
          className="bg-transparent hidden max-table_md:flex items-center justify-center text-neutral-200"
        >
          <IconMenu2 />
        </button>

        {/*====Desktop account section====*/}
        <div className="flex items-center gap-5 max-table_md:hidden">
          <button
            onClick={showLoginModal}
            className="text-neutral-400 text-sm capitalize font-normal"
          >
            Log In
          </button>
          <NavLink
            className="rounded-md transition-all hover:bg-green-600 bg-green-500 py-2 px-10 text-white capitalize font-semibold"
            to="/signup"
          >
            Sing Up
          </NavLink>
        </div>
      </header>

      {/*====Mobile navbar section====*/}
      <div
        style={{zIndex:2}}
        className={`bg-dark-grays -z-10 w-full absolute hidden flex-col transition-all max-table_md:flex p-10 items-center justify-center ${
          nav === true ? "top-16" : "-top-full"
        }`}
      >
        <Navbar routes={routes} />

        <button
          onClick={showLoginModal}
          className="text-neutral-400 text-sm capitalize font-normal mt-10 mb-5"
        >
          Log In
        </button>

        <div className="w-full flex flex-col gap-5">
          <NavLink
            className="rounded-md text-center transition-all hover:bg-green-600 bg-green-500 py-2 px-10 text-white capitalize font-semibold"
            to="/signup"
          >
            Sing Up
          </NavLink>
        </div>
      </div>
    </>
  );
};
