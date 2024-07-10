import { useEffect, useRef, useState } from "react";
import {toast} from 'sonner'
import { animateScroll as scroll } from 'react-scroll';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// eslint-disable-next-line no-undef
const key = process.env.REACT_APP_EMAIL_TOKEN;
// eslint-disable-next-line no-undef
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const SERVICES_OPTIONS = [
  "Siniestro vehicular",
  "Seguro Vehicular",
  "Seguro Hogar",
  "Seguro Mala práxis",
  "Seguro Sepelios",
  "Seguro Riesgo Cibernético",
  "Seguro ART Caución",
  "Seguro Salud",
];
// eslint-disable-next-line react/prop-types
const Contact = ({ subject, setSubject }) => {
  const [containKey, setContainKey] = useState(false);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const fileRef = useRef(null);
  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    //Para liberar memoria
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search).get("key");
    if (params && params === key) {
      setContainKey(true);
    }
  }, [containKey]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const fileButtonClick = () => {
    if (fileRef) {
      fileRef.current.click();
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("subject", subject);
    formData.append("message", input.message);
    formData.append("bool", containKey);
    
    if (files.length > 0) {
        files.forEach((file) => {
            formData.append("files[]", file);
        });
    }

    // Logs para verificar los archivos añadidos a FormData
    for (const [key, value] of formData.entries()) {
        if (key === 'files[]') {
            console.log(`Key: ${key}, File name: ${value.name}, File size: ${value.size}`);
        } else {
            console.log(`Key: ${key}, Value: ${value}`);
        }
    }

    try {
      

        const responsePromise = fetch(`${BACKEND_URL}/UrgentMailer`, {
            method: "POST",
            body: formData
        });

        toast.promise(responsePromise, {
            loading: "Enviando...",
            success: "Mensaje enviado",
            error: "Error al enviar mensaje"
        });
        const response = await responsePromise;
        if (!response.ok) {
            toast.error("Error al enviar mensaje");
        }

        const result = await response.json();
        result.finally(() => {
            setFiles([]);
            setInput({
                name: "",
                email: "",
                message: ""
            });
            setSubject("");
            setPreviews([]);
            scroll.scrollToTop({ duration: 500 });
        });
    } catch (error) {
        console.error(error);
        toast.error("Error al enviar e-mail");
    }
};

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center gap-5 py-10 bg-gray-400"
    >
      <h1
        className="text-white font-black text-2xl uppercase"
        style={{ filter: "drop-shadow(0 4px 2px rgb(0, 0, 0, 0.7))" }}
      >
        Contácta<span className="text-[#F90607]">nos</span>
      </h1>
      <div className="min-w-64 max-w-[600px] w-full px-2 min-[400px]:px-10 flex flex-col md:flex-row">
        <form onSubmit={onSubmit} className="flex flex-col flex-1 gap-5">
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Nombre"
            onChange={handleInputChange}
            className="outline-none px-2 py-1 rounded-full font-semibold shadow-sm focus:shadow-inner focus:shadow-black/70 shadow-black/70 transition-all valid:shadow-inner valid:shadow-black/70"
            required
          />
          <input
            type="email"
            name="email"
            value={input.email}
            placeholder="Correo Electrónico"
            onChange={handleInputChange}
            className="outline-none px-2 py-1 rounded-full font-semibold shadow-sm focus:shadow-inner focus:shadow-black/70 shadow-black/70 transition-all valid:shadow-inner valid:shadow-black/70"
            required
          />
          <select
            name="subject"
            value={subject}
            aria-label="Asunto"
            className="outline-none cursor-pointer px-2 py-1 rounded-full font-semibold shadow-sm focus:shadow-inner focus:shadow-black/70 shadow-black/70 transition-all"
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option disabled value="">
              Asunto
            </option>
            {SERVICES_OPTIONS.map((service, i) => (
              service == "Siniestro vehicular" ?
              <option
                key={i}
                value={`Denuncia ${service}`}
              >{`Denuncia ${service}`}</option>
              :
              <option
                key={i}
                value={`Cotización de ${service}`}
              >{`Cotización de ${service}`}</option>
            ))}
          </select>
          <textarea
            name="message"
            value={input.message}
            placeholder="Mensaje"
            onChange={handleInputChange}
            className="outline-none px-2 py-1 rounded-xl h-48 resize-none font-semibold shadow-sm focus:shadow-inner focus:shadow-black/70 shadow-black/70 transition-all valid:shadow-inner valid:shadow-black/70"
            required
          />
          <input
            type="file"
            id="file"
            className="hidden"
            multiple
            onChange={handleFileChange}
            ref={fileRef}
          />
          <section className="w-full -translate-y-4 flex flex-col gap-1 items-center justify-center">
            <button
              type="button"
              onClick={fileButtonClick}
              className="w-fit flex justify-center items-center rounded-full px-2 py-1 transition-all duration-300 hover:text-white hover:bg-[#F90607]"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5"
                    className="stroke-[#3E3E3E]"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              {files.length === 0 ? "Adjuntar" : "Seleccionar más"}
            </button>
          </section>
          <div
            className={`max-w-[520px] p-1 rounded-xl shadow-inner shadow-black/70 w-full ${
              previews.length === 0 ? "hidden" : "inline-block"
            }`}
          >
            <Swiper
              scrollbar={true}
              direction="horizontal"
              slidesPerView={2}
              spaceBetween={20}
              breakpoints={{
                410: { slidesPerView: 3 },
                530: { slidesPerView: 4 },
              }}
            >
              {previews.map((file, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white/65 w-28 h-40 px-2 py-3 rounded-xl flex flex-col gap-1 relative">
                    <img
                      src={file}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                    <p className="truncate">{files[i]?.name}</p>
                    <button
                      type="button"
                      className="absolute top-1 right-1 z-50 bg-red-600 rounded-full w-4 h-4 flex justify-center items-center cursor-pointer"
                      onClick={() => handleRemoveFile(i)}
                    ></button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            type="submit"
            className="w-max border border-[#F90607] rounded-full py-2 px-4 text-white bg-[#F90607] active:bg-opacity-80 active:border-transparent transition-all"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
