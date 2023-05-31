import { Layout } from "../components/Layout";
import { icons } from "../data/icons";

export const Contacto = () => {
  return (
    <Layout title={"Contacto"}>
      <div className="bg-[url('./assets/images/loto-md.jpg')] bg-cover bg-right-bottom bg-no-repeat h-screen w-full flex justify-center items-center">
        <div className="mt-12 px-6 bg-[#ffffff7d] bg-clip-padding backdrop-filter backdrop-blur-sm rounded-lg text-gray-50 w-4/5 h-5/6 flex flex-col justify-center items-center text-center gap-8 md:gap-24 xl:h-[60%] xl:w-[60%] fullHD:w-[50%] fullHD:h-[70%]">
          <div className="flex flex-col gap-8 md:gap-12 lg:grid lg:grid-cols-2 lg:w-11/12 lg:gap-0">
            <div>
              <h1 className="text-3xl uppercase mb-4 md:text-6xl lg:text-4xl fullHD:text-6xl">
                Visítanos
              </h1>
              <p className="mb-2 md:text-2xl lg:text-base fullHD:text-xl">
                Gral. Sabino Fernández Campo Nº 8
              </p>
              <p className="mb-2 md:text-2xl lg:text-base fullHD:text-xl">
                Oviedo - Asturias
              </p>
              <p className="mb-2 md:text-2xl lg:text-base fullHD:text-xl">
                Junto al parking público C.C. Los Prados
              </p>
            </div>
            <div>
              <h1 className="text-3xl uppercase mb-4 md:text-6xl lg:text-4xl fullHD:text-6xl">
                Llámanos
              </h1>
              <p className="mb-2 md:text-2xl lg:text-base fullHD:text-xl">
                (+34) 984 046 397
              </p>
              <p className="mb-2 md:text-2xl lg:text-base fullHD:text-xl">
                (+34) 627 90 81 08
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full place-items-center gap-y-6 md:gap-y-16 lg:w-1/2 lg:gap-y-8 fullHD:gap-y-12">
            {icons.map(({ name, icon, ref }) => (
              <a
                href={ref}
                target="_blank"
                rel="noopener noreferrer"
                key={name}
              >
                <img
                  src={icon}
                  alt={name}
                  className="h-10 md:h-20 lg:h-12 fullHD:h-14 transition-all hover:scale-125"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
