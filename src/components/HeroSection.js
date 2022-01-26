import React from "react";
import Button from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE WAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large" path="/sign-up">
                    GET STARTED
                </Button>
                <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large" path="/">
                    WATCH TRAILER <i className="far fa-play-circle"/>
                </Button>
            </div>
        </section>
    )
}

export default HeroSection;
