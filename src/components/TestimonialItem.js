import React from "react";

const TestimonialItem = ({
    name,
    text,
    location,
    img,
    activeSlideIndex,
    index,
    slidesQty,
}) => {
    let position = "nextSlide";

    if (index === activeSlideIndex) {
        position = "activeSlide";
    } else if (
        index === activeSlideIndex - 1 ||
        (index === slidesQty - 1 && activeSlideIndex === 0)
    ) {
        position = "prevSlide";
    }

    return (
        <>
            <li className={`testimonial__item ${position}`}>
                <figure className="testimonial__item__pic-wrap">
                    <img
                        src={img}
                        alt="Travel"
                        className="testimonial__item__img"
                    />
                </figure>
                <div className="testimonial__item__info">
                    <h3 className="testimonial__item__title">{name}</h3>
                    <h4 className="testimonial__item__text">{text}</h4>
                    <p className="testimonial__item__location">{location}</p>
                </div>
            </li>
        </>
    );
};

export default TestimonialItem;
