import { home } from "../texts";

const Home = () => {
  return (
    <div id="home" className="py-5 flex flex-col justify-center items-center">
      <h1 className="uppercase text-2xl md:text-4xl">{home.title}</h1>
      <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 min-[820px]:gap-20 p-4">
      <div className="flex flex-row justify-center items-center">
      <img src={home.image} alt="logo" className="hidden sm:block w-80 image z-0" />
      <img src={home.responsiveImage} alt="logo" className="flex md:hidden w-80 image z-0 rotate-6 sm:rotate-0" />
      </div>
      <section className="flex flex-col justify-center items-center min-[400px]:max-w-[500px] md:w-96 lg:w-[500px] gap-8 font-semibold">
        <p>{home.description1}</p>
        <p>{home.description2}</p>
        <p>{home.description3}</p>
      </section>
      </section>
    </div>
  );
};

export default Home;
