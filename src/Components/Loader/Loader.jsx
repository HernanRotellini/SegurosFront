
const Loader = () => {
  return (
    <div className="w-screen min-h-screen bg-white flex flex-col gap-7 justify-center items-center">
        <img src="/seguros-icon.svg" alt="logo" />
        <div className="loader">
            <span></span>
        </div>
        <h1 className="text-black font-bold">Cargando ...</h1>
    </div>
  )
}

export default Loader