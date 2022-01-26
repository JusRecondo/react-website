import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailValidation from "../utils/emailValidation";
import "./Footer.css";

function Footer() {
    const [subscribeFormValue, setSubscribeFormValue] = useState("");
    const [subscribeFormError, setSubscribeFormError] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubscribeChange = (e) => {
        setSubscribeFormValue(e.target.value);
    };

    const handleSubscribeSubmit = (e) => {
        e.preventDefault();
        setSubscribeFormError(validateSubscribeForm(subscribeFormValue));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (subscribeFormError === "" && isSubmit) {
            console.log(subscribeFormValue);
        }
    }, [subscribeFormError, isSubmit]);

    const validateSubscribeForm = (value) => {
        let error = "";
        if (!value) {
            error = "Email is required!";
        } else if (!emailValidation(value)) {
            error = "This is not a valid email!";
        }

        return error;
    };

    return (
        <footer className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join de Adventure Newsletter to receive our best vacation
                    deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="subscription__form">
                    {subscribeFormError === "" && isSubmit ? (
                        <p className="form__success">Thanks for subscribing!</p>
                    ) : (
                        <form onSubmit={handleSubscribeSubmit}>
                            <input
                                name="subscribeEmail"
                                placeholder="Yout Email"
                                className="form__input"
                                onChange={handleSubscribeChange}
                            />
                            <p>{subscribeFormError}</p>
                            <input
                                type="submit"
                                value="Subscribe"
                                className="form__submit btn btn--outline"
                            />
                        </form>
                    )}
                </div>
            </section>
            <section className="footer-links">
                <h2>About Us</h2>
                <ul className="footer-link-items">
                    <li>
                        <Link to="/">How it works</Link>
                    </li>
                    <li>
                        <Link to="/">Testimonials</Link>
                    </li>
                    <li>
                        <Link to="/">Careers</Link>
                    </li>
                    <li>
                        <Link to="/">Investors</Link>
                    </li>
                    <li>
                        <Link to="/">Terms of services</Link>
                    </li>
                </ul>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL
                            <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2020</small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link
                            className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
