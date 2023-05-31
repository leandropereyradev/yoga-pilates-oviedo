import title from "../../assets/images/nombre_firma.svg";
import photo from "../../assets/images/karina-moro.jpg";
import { Banner } from "../Banner";

export const Section = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto pt-12 text-[#474747] text-justif md:pt-28 xl:max-w-5xl fullHD:pt-36">
        <img
          src={title}
          alt="firma"
          className="w-[15rem] mx-auto mb-6 md:w-[25rem] md:mb-12 fullHD:w-[35rem] fullHD:mb-20"
        />
        <h2 className="text-center text-2xl font-bold mb-10 md:text-3xl fullHD:text-5xl fullHD:mb-20">
          Espacio de salud, cuerpo y mente
        </h2>
        <p className="mb-6 text-lg text-justify md:text-2xl md:leading-10 md:mb-14 fullHD:leading-10">
          BienEstar es un espacio creado con la firme certeza de que el Pilates
          y el Yoga son necesarios para mantener un óptimo estado de salud que
          el ritmo de vida que llevamos nos arrebata. Extendiendo esta visión a
          todos los ámbitos de la vida diaria, con un trato personal y adaptando
          nuestro servicio a las necesidades de cada alumno.
        </p>
        <p className="text-lg text-justify md:text-2xl md:leading-10 fullHD:leading-10">
          Por eso ofrecemos amplitud de horarios y cambios de turnos según las
          necesidades, para que sea cual sea tu ocupación y horario laboral
          puedas combinarlo con tu práctica. Nuestros grupos son reducidos, para
          una meticulosa práctica y seguimiento personal persiguiendo la
          necesidad y objetivo de cada alumno.
        </p>
      </div>

      <Banner />

      <div className="flex flex-col w-11/12 mx-auto items-center gap-4 text-[#474747]">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl md:mb-4">Dirección y Gestión</h3>
          <h4 className="text-2xl font-bold md:text-3xl md:mb-8">
            Karina Moro Rossi
          </h4>
        </div>
        <img
          src={photo}
          alt="Karina Moro"
          className="rounded-lg fullHD:w-[30rem]"
        />
        <div className="text-center md:text-2xl md:mt-4">
          <p>Propietaria - Directora</p>
          <p>Profesora de Yoga - Instructora de Pilates</p>
        </div>
      </div>
    </section>
  );
};
