import appStore from "../assets/images/appstore.png";

export const Banner = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[url('./assets/images/lotus.jpg')] bg-cover bg-right-bottom bg-no-repeat my-12 md:my-28 fullHD:my-36 fullHD:py-12">
      <div>
        <a
          href="https://connect.timp.pro/centers/7496-bienestar-pxBCLL"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={appStore}
            alt="appstore"
            className="w-64 mt-6 md:w-[30rem] fullHD:w-[40rem]"
          />
        </a>
      </div>
      <div className="text-center text-gray-50">
        <h1 className="text-2xl mb-4 uppercase tracking-widest md:text-4xl md:mb-8 fullHD:text-5xl">
          Gestiona tus reservas
        </h1>
        <h3 className="text-base mb-4 md:text-xl fullHD:text-2xl">
          Olvídate de volver a llamar por teléfono o pedir cita por WhatsApp
        </h3>
        <h4 className="text-base mb-12 md:text-xl fullHD:text-2xl fullHD:mb-20">
          ¡Descarga la app y gestiona tus reservas!
        </h4>
      </div>
    </div>
  );
};
