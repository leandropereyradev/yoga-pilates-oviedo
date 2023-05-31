import { NavLink } from "react-router-dom";
import { useScrollPosition } from "../hook/useScrollPosition";
import logo from "../assets/images/logo.svg";

type IsActiveLinkProps = {
  isActive: boolean;
};

export const NavBar = () => {
  const scrollPosition = useScrollPosition();

  const defaultStyle =
    " fixed w-full flex justify-between transition-all items-center px-4 py-4";

  const isActiveLink = ({ isActive }: IsActiveLinkProps): string => {
    const defaultNavStyle = `uppercase font-bold tracking-[0.2em] text-xl lg:text-base ${
      scrollPosition < 90 ? "text-gray-50" : "text-gray-800"
    }`;

    return isActive
      ? "text-[#fd9b49] " + defaultNavStyle
      : "hover:text-[#fd9b49] " + defaultNavStyle;
  };

  return (
    <nav>
      <div
        className={
          scrollPosition < 90
            ? defaultStyle
            : defaultStyle +
              " py-0 md:py-2 bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 text-gray-800"
        }
      >
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="bienestar" className="md:w-12 lg:w-8" />
          </NavLink>
        </div>
        <div
          className={`flex transition-all gap-10 ${
            scrollPosition < 90 ? "gap-10" : "fullHD:gap-20"
          }`}
        >
          <NavLink to={"/"} className={isActiveLink}>
            Inicio
          </NavLink>
          <NavLink to={"/sobre-mi"} className={isActiveLink}>
            Sobre mi
          </NavLink>
          <NavLink to={"/contacto"} className={isActiveLink}>
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
