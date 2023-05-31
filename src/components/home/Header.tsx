import useScreenWidth from "../../hook/useScreenWidth";
import videoSm from "../../assets/video/lotus_sm.webm";
import videoLg from "../../assets/video/lotus_lg.webm";
import logoText from "../../assets/images/logo-texto.svg";
import subtitle from "../../assets/images/subtitle.svg";

export const Header = () => {
  const { width } = useScreenWidth();

  const Clip = (url: string) => {
    return (
      <video
        key={url}
        autoPlay
        loop
        muted
        className="w-full h-full absolute object-cover z-[-1]"
      >
        <source src={url} type="video/webm" />
      </video>
    );
  };

  return (
    <header className="h-screen">
      {width <= 1000 ? Clip(videoSm) : Clip(videoLg)}
      <div className="h-screen w-full flex justify-center items-center lg:justify-start lg:w-4/5 lg:mx-auto">
        <div className="flex flex-col">
          <img
            src={logoText}
            alt="logo-texto"
            className="w-72 md:w-[40rem] xl:w-[50rem] fullHD:w-[60rem]"
          />
          <img
            src={subtitle}
            alt="logo-texto"
            className="w-52 pt-6 md:w-[25rem] fullHD:w-[35rem] fullHD:pt-12"
          />
        </div>
      </div>
    </header>
  );
};