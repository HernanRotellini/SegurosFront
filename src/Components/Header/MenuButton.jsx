// eslint-disable-next-line react/prop-types
const MenuButton = ({showSidebar, setShowSidebar, trigger}) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    setShowSidebar(checked);
  };
  return (
    <div className="burger-icon z-50 md:hidden" ref={trigger}>
      <label className="burger" ref={trigger} htmlFor="burger">
        <input className="line" ref={trigger} checked={showSidebar} type="checkbox" id="burger" onChange={handleChange} />
      </label>
    </div>
  );
};

export default MenuButton;
