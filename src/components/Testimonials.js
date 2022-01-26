import React, { useEffect, useState } from "react";
import api from "../api";
import TestimonialItem from "./TestimonialItem";
import "./Testimonials.css";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useEffect(() => {
        api.get("testimonials").then(setTestimonials);
    }, []);

    useEffect(() => {
        let slider = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(slider);
    });

    function nextSlide() {
         if (activeSlideIndex !== testimonials.length - 1) {
            setActiveSlideIndex(activeSlideIndex + 1);
        } else if (activeSlideIndex === testimonials.length - 1) {
            setActiveSlideIndex(0);
        }
    }

    const prevSlide = () => {
        if (activeSlideIndex !== 0) {
            setActiveSlideIndex(activeSlideIndex - 1);
        } else if (activeSlideIndex === 0) {
            setActiveSlideIndex(testimonials.length - 1);

        }
    }

    return (
        <section className="testimonials">
            <h2>Reviews</h2>
            <article>
                <ul className="testimonials__items">
                    {testimonials.map((item, index) => (
                        <TestimonialItem
                            key={item.id}
                            index={index}
                            name={item.name}
                            text={item.text}
                            location={item.location}
                            img={item.img}
                            activeSlideIndex={activeSlideIndex}
                            slidesQty={testimonials.length}
                        />
                    ))} 
                </ul>
                <button className="prev" onClick={prevSlide}>
                    <img src="img/left-arrow.svg" alt="Previous slide"/>
                </button>
                <button className="next" onClick={nextSlide}>
                <img src="img/right-arrow.svg" alt="Next slide"/>
                </button>
            </article>
        </section>
    );
};

export default Testimonials;
