import { Helmet } from "react-helmet";

interface LayoutProps {
  title: string;
  children: JSX.Element;
}

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " - Bienestar" : "Bienestar"}</title>
        <meta
          name="description"
          content="Yoga y Pilates en Oviedo - Asturias"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {children}
    </>
  );
};
