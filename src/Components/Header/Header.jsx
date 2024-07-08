import { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
// eslint-disable-next-line react/prop-types
const Header = ({activeSection, setActiveSection}) => {
  
  const [showSidebar, setShowSidebar] = useState(false);
  const trigger = useRef(null);
  const BUTTONS_NAV = [
    {
      path: "home",
      text: "Inicio",
    },
    {
      path: "companies",
      text: "Empresas",
    },
    {
      path: "services",
      text: "Servicios",
    },
    {
      path: "contact",
      text: "Contacto",
    },
  ];

  const handleSetActive = (to) => {
    setActiveSection(to);
  };
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between shadow-md items-center bg-white px-5 md:px-10 min-[870px]:px-20 py-2">
      <ScrollLink
        to={"home"}
        smooth={true}
        duration={500}
        spy={true}
        offset={-96}
        onSetActive={handleSetActive}
      >
        <img
          src="/seguros-icon.svg"
          alt="icon"
          className="h-14 min-[400px]:h-20 cursor-pointer"
          onClick={() => setActiveSection("home")}
        />
      </ScrollLink>
      <MenuButton
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        trigger={trigger}
      />
      <Menu
        trigger={trigger}
        showSidebar={showSidebar}
        buttons={BUTTONS_NAV}
        activeSection={activeSection}
        handleSetActive={handleSetActive}
        setShowSidebar={setShowSidebar}
      />
      <section className="hidden md:flex flex-row gap-10">
        {BUTTONS_NAV.map(({ path, text }, i) => (
          <ScrollLink
            key={i}
            to={path}
            smooth={true}
            duration={500}
            spy={true}
            offset={-96}
            onSetActive={handleSetActive}
            className={`border cursor-pointer py-1 px-4 rounded-full border-[#F90607] transition-all ${
              activeSection === path
                ? "bg-[#F90607] text-white"
                : "hover:border-transparent hover:bg-[#F90607] hover:text-white"
            }`}
          >
            {text}
          </ScrollLink>
        ))}
      </section>
    </header>
  );
};

export default Header;
