/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

const Menu = ({
  showSidebar,
  setShowSidebar,
  buttons,
  handleSetActive,
  activeSection,
  trigger,
}) => {
  const menuRef = useRef(null); // Referencia al menú

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current) return;
      if (
        !showSidebar ||
        menuRef.current.contains(event.target) ||
        trigger.current.contains(event.target)
      )
        return;
      setShowSidebar(false);
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [setShowSidebar, showSidebar, trigger]);
  return (
    <aside
      ref={menuRef}
      id="sidebar"
      className={`bg-white w-screen min-[320px]:w-[300px] p-3 pt-24 overflow-y-auto flex flex-col items-center fixed right-0 top-0 z-0 min-h-screen ${
        showSidebar
          ? "translate-x-0 shadow-2xl shadow-black"
          : "translate-x-full rounded-tl-[5rem] shadow-none"
      } md:translate-x-full md:shadow-none transition-all duration-300`}
    >
      <section className="flex flex-col justify-center items-center gap-10">
        {buttons.map(({ text, path }, i) => (
          <ScrollLink
            key={i}
            to={path}
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
            onSetActive={handleSetActive}
            className={`border cursor-pointer py-1 w-40 flex justify-center items-center rounded-full border-[#F90607] transition-all ${
              activeSection === path
                ? "bg-[#F90607] text-white"
                : "hover:border-transparent hover:bg-[#F90607] hover:text-white"
            }`}
          >
            {text}
          </ScrollLink>
        ))}
      </section>
    </aside>
  );
};

export default Menu;
