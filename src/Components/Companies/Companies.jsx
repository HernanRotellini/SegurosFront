import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const companies = [
  {
    name: "Sancor Seguros",
    image: "/sancor-seguros.png",
  },
  {
    name: "Grupo Sancor Seguros",
    image: "/grupo-sancor-seguros.jpeg",
  },
  {
    name: "Seguros Rivadavia",
    image: "/rivadavia-seguros.jpeg",
  },
  {
    name: "Galeno Seguros",
    image: "/galeno-seguros.png",
  },
  {
    name: "Galicia Seguros",
    image: "/galicia-seguros.png",
  },
  {
    name: "Prevención ART",
    image: "/prevencion-art.jpg",
  },
  {
    name: "Galeno ART",
    image: "/galeno-art.jpg",
  },
  {
    name: "Prevención Salud",
    image: "/prevencion-salud.jpg",
  },
  {
    name: "InSur Seguros",
    image: "/insur-seguros.png",
  },
];

const Companies = () => {
  return (
    <div id="companies" className="flex flex-col justify-center items-center gap-4 py-5 bg-gray-400">
      <h1 className="text-2xl md:text-4xl font-semibold">¡Trabajamos con éstas empresas!</h1>
      <section className="w-full max-w-[850px]">
        <Swiper
          direction="horizontal"
          spaceBetween={10}
          speed={3500}
          breakpoints={{
            450: { slidesPerView: 2 },
            650: { slidesPerView: 3 },
            850: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {companies.map(({ name, image }, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-48 bg-gray-500/60 rounded-lg flex flex-col items-center justify-center p-2 mx-auto">
                <img src={image} alt={name} className="rounded-lg w-full h-40 object-fill" />
                <h3 className="text-xl my-4 text-center text-black/80 font-bold truncate w-full">{name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Companies;
