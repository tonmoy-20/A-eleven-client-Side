import React from "react";
import ContactUs from "./ContactUsSection/ContactUs";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import SliderSwip from "../components/SliderSwip";
import Faq from "./FaqPage";
import PrivacyPolicy from "./PrivacyPolicy";
import AboutPage from "./AboutPage";

const Home = () => {
  return (
    <div>
      <SliderSwip />
      <FeaturedSection></FeaturedSection>
      <AboutPage></AboutPage>
      <Faq></Faq>
      <PrivacyPolicy></PrivacyPolicy>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
