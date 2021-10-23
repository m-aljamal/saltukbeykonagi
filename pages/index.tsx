import type { NextPage } from "next";
import Head from "next/head";
import ReversationForm from "src/components/ReversationForm";
import AboutSection from "src/components/Views/AboutSection";
import AppCarousel from "src/components/Views/AppCarousel";
import BestRooms from "src/components/Views/BestRooms";
import SpecialRooms from "src/components/Views/SpecialRooms";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>saltukbeykonagi</title>
        <meta name="description" content="saltukbeykonagi" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <AppCarousel />
        <ReversationForm />
        <AboutSection />
        <SpecialRooms />
        <BestRooms />
      </main>
    </div>
  );
};

export default Home;
