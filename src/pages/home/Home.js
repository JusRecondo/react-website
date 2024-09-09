import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import Testimonials from "../../components/testimonials/Testimonials";
import Cards from "../../components/cards/Cards";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Cards />
            <Testimonials />
        </>
    );
};

export default Home;
