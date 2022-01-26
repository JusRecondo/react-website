import React, { useEffect, useState } from "react";
import emailValidation from "../utils/emailValidation";

const SignUpForm = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validateForm = (values) => {
        const errors = {};

        if(!values.username) {
            errors.username = "Username is required!";
        }

        if(!values.email) {
            errors.email = "Email is required!";
        } else if (!emailValidation(values.email)) {
            errors.email = "This is not a valid email!";
        }

        if(!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters long!";
        }

        if(!values.confirmPassword) {
            errors.confirmPassword = "Password confirmation is required!";
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords must match!";
        }

        return errors;
    }

    return (
        <>
            {Object.keys(formErrors).length === 0 && isSubmit ? 
            (<p className="form__success">Congratulations! Signed in succesfully</p>)
                : 
            (<form className="sing-up__form" onSubmit={handleSubmit}>
                <label className="form__label">
                    Username:
                    <input
                        className="form__input"
                        type="text"
                        name="username"
                        placeholder="Create a username..."
                        onChange={handleInputChange}
                    />
                    <p className="form__error">{formErrors.username}</p>
                </label>
                <label className="form__label">
                    Email:
                    <input
                        className="form__input"
                        type="text"
                        name="email"
                        placeholder="Enter your email..."
                        onChange={handleInputChange}
                    />
                    <p className="form__error">{formErrors.email}</p>
                </label>
                <label className="form__label">
                    Password:
                    <input
                        className="form__input"
                        type="password"
                        name="password"
                        placeholder="Create a password..."
                        onChange={handleInputChange}
                    />
                    <p className="form__error">{formErrors.password}</p>
                </label>
                <label className="form__label">
                    Confirm Password:
                    <input
                        className="form__input"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password..."
                        onChange={handleInputChange}
                    />
                    <p className="form__error">{formErrors.confirmPassword}</p>
                </label>
                <input 
                    className="form__submit" 
                    type="submit" 
                    value="Sign Up" 
                />
            </form>)
            } 
        </>
    );
};

export default SignUpForm;
