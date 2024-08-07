import whatsappLogo from '../../assets/whatsapp_logo.png'; 

const Bot = () => { 
  const path = window.location.pathname;
 
  const key = path;
  
  return key === "/"+process.env.REACT_APP_EMAIL_TOKEN ? (
    <a href='https://wa.me/2616617951' target="_blank" rel="noopener noreferrer" style={styles.floatingButton}>
      <img 
        src={whatsappLogo} 
        alt="WhatsApp" 
        style={styles.icon}
      />
    </a>
  ) : null;
};

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '50px',
    right: '80px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    overflow: 'hidden', // Asegura que la imagen no se desborde del botón
    animation: 'bounce 1s infinite' // Aplica la animación
  },
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' // Asegura que la imagen cubra completamente el botón
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)', 
    },
    '40%': {
      transform: 'translateY(-15px)', 
    },
    '60%': {
      transform: 'translateY(-10px)', 
    }
  }
};


export default Bot;
