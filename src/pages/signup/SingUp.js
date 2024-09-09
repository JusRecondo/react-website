import React from "react";
import SignUpForm from "../../components/signup/SignUpForm";
import "./SignUp.css";

const SingUp = () => {
    return (
        <section className="sign-up">
            <h1>Join Today!</h1>
            <SignUpForm/>   
        </section>
    );
};

export default SingUp;
