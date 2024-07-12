import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Bot from "./Components/Bot/Bot";
import Loader from "./Components/Loader/Loader";
import Home from './Components/Home/Home';
import Companies from './Components/Companies/Companies';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';


function App() {
  
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [subject, setSubject] = useState('');
  useEffect(() => {
    document.title = 'Grupo Oeste';

    // Función para cambiar el favicon
    const setFavicon = (url) => {
      const link = document.createElement('link');
      const oldLink = document.querySelector('link[rel="icon"]');

      link.rel = 'icon';
      link.href = url;

      if (oldLink) {
        document.head.removeChild(oldLink);
      }
      document.head.appendChild(link);
    };

    // Establece el nuevo favicon
    setFavicon('/seguros-icon.svg');
  }, []);
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(time);
  }, []);
  return !loading ? (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Bot/>
      <Home/>
      <Companies/>
      <Services setSubject={setSubject} setActiveSection={setActiveSection}/>
      <Contact subject={subject} setSubject={setSubject}/>
    </>
  ) : (
    <Loader />
  );
}

export default App;
