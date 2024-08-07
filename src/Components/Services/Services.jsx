import { services } from "../texts";
import { Link as ScrollLink } from "react-scroll";

const SERVICES_CARDS = [
  {
    name: "Denuncia Siniestros",
    image: "/siniestroVehicular.jpg",
  },
  {
    name: "Vehicular",
    image: "/vehicular.jpg",
  },
  {
    name: "Hogar",
    image: "/hogar.jpg",
  },
  {
    name: "Mala Práxis",
    image: "/malapraxis.png",
  },
  {
    name: "Sepelios",
    image: "/sepelios.png",
  },
  {
    name: "Riesgo Cibernético",
    image: "/cibernetico.jpg",
  },
  {
    name: "ART Caución",
    image: "/caucion.jpg",
  },
  {
    name: "Salud",
    image: "/salud.jpg",
  },
];
const customImgStyle = {
  width: '12rem',  // Ajusta esto según tus necesidades
  height: '9.5rem', // Ajusta esto según tus necesidades
  objectFit: 'cover', // Mantiene las proporciones
  borderRadius: '0.5rem' // Equivalente a rounded-lg
};
// eslint-disable-next-line react/prop-types
const Services = ({ setSubject, setActiveSection }) => {
  const handleClick = (subject) => {
    setSubject(subject);
    setActiveSection("contact");
  };
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center py-4 gap-4"
    >
      <h1 className="text-2xl sm:text-4xl">{services.title}</h1>
      <section className="grid grid-cols-1 min-[470px]:grid-cols-2 sm:grid-cols-3 min-[850px]:grid-cols-4 place-content-center place-items-center gap-x-4 gap-y-2 w-full max-w-[900px]">
        {SERVICES_CARDS.map(({ name, image }, i) => (
          <div
            key={i}
            className="w-[200px] h-max flex flex-col justify-center items-center p-2 gap-2 bg-white rounded-lg"
          >
            <div className="relative cursor-pointer">
              <ScrollLink
                to="contact"
                offset={-96}
                smooth={true}
                duration={500}
                spy={true}
              >
                <div
                  onClick={() =>
                    handleClick(
                      name === "Denuncia Siniestros"
                        ? `Denuncia ${name}`
                        : `Cotización de Seguro ${name}`
                    )
                  }
                  className="absolute flex justify-center items-center w-full h-full rounded-lg opacity-0 hover:opacity-100 bg-white/70 backdrop-blur-sm transition-all duration-200 text-[#3E3E3E] font-bold text-lg"
                >
                  {name === "Denuncia Siniestros"
                    ? `DENUNCIAR`
                    : `PEDIR COTIZACIÓN`}
                </div>

                <img
                  src={image}
                  alt={name}
                  style={customImgStyle}
                />
              </ScrollLink>
            </div>
            <h3>{name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
