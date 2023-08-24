import type { NextPage } from "next";
import ReversationForm from "src/components/ReversationForm";
import AboutSection from "src/components/Views/AboutSection";
import AppCarousel from "src/components/Views/AppCarousel";
import BestRooms from "src/components/Views/BestRooms";
import SpecialRooms from "src/components/Views/SpecialRooms";
import { seoData } from "src/data/seo";
const Home: NextPage = () => {
  return (
    <div>
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
