import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = ({ routes }) => {
  const activeStyles = {
    color: "#22c55e",
    transition: ".3s ease all",
  };

  const { pathname } = useLocation();

  const barActiveStyles = (path) => {
    return pathname === path ? "bg-green-500" : "bg-transparent";
  };

  return (
    <nav>
      <ul className="flex items-center gap-5 max-table_md:flex-col">
        {/*====Navbar====*/}
        {routes &&
          routes.map((data) => {
            const { id, name, path } = data;
            return (
              <li className="text-sm capitalize font-normal relative "   key={id}>
                <NavLink
                  className="text-neutral-400"
                  to={path}
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  {name}
                </NavLink>

                <span
                  className={`max-table_md:hidden absolute -bottom-6 transition-all w-full h-[0.95px] left-0 ${barActiveStyles(
                    path
                  )}`}
                ></span>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
};
