import React from "react";
import ContactUs from "./ContactUsSection/ContactUs";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import SliderSwip from "../components/SliderSwip";

const Home = () => {
  return (
    <div>
      <SliderSwip />
      <FeaturedSection></FeaturedSection>

      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
