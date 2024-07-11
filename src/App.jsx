import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Bot from "./Components/Bot/Bot";
import Loader from "./Components/Loader/Loader";
import Home from './Components/Home/Home';
import Companies from './Components/Companies/Companies';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { Favicon } from 'react-favicon';

function App() {
  
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [subject, setSubject] = useState('');
  useEffect(() => {
    document.title = 'Grupo Oeste';
    const favicon = new Favicon({
      src: '/seguros-icon.svg',
      sizes: ['16x16', '32x32', '64x64'],
    });
    favicon.apply();
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
