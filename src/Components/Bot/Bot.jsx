
const Bot = () => {
  const path = window.location.pathname;
  const key = path;
    return key === '/'+process.env.REACT_APP_EMAIL_TOKEN ? (
      <div className="fixed bottom-5 sm:right-8 right-4 z-[999] w-19 h-19 cursor-pointer text-white text-4xl bg-[#F90607] w-14 h-14 flex items-center justify-center rounded-full animate-bounce">
        <a href="https://wa.me/542616617951" target="_blank" className="flex items-center justify-center">
        <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </div>
    ) : null;
  };
  
  export default Bot;