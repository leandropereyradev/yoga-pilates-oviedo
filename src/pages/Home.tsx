import { Layout } from "../components/Layout";
import { Header } from "../components/home/Header";
import { Section } from "../components/home/Section";

export const Home = () => {
  return (
    <Layout>
      <>
        <Header />
        <Section />
      </>
    </Layout>
  );
};
