import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../Catalog/Catalog.styled";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { FormWrapper, InputWrapper, StyledField, ButtonsWrapper, SuccessWrapper } from "../../../Cart/Checkout/Checkout.styled";
import { ButtonWrapper, ButtonFooter } from "./LogIn.styled";

const ErrorDisplay = ({children}) => {
    return (
        <span>
            {children}
        </span>
    )
};

const LogIn = () => {
    const navigate = useNavigate();
    const {logIn} = useAuth();
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Incorrect email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
    });

    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);

        setTimeout(() => {
            console.log("login: ", values.email);
            setSubmitting(false);
            logIn(values.email)
            navigate('/', {replace: true});
            setSubmitting(false);
        }, 5);

    };

    const handleSignUp = () => {
        navigate('/signup')
    }


    return (
        <div>
            <FormWrapper>
                <h1 style={{ textAlign: 'center', fontSize: '35px', marginBottom: '37px' }}>Log in</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isValid, isSubmitting, setValues }) => (
                        <Form>
                            <div className="field">
                                <StyledField name="email" placeholder="Email" type="email" />
                                <div className="error">
                                    <ErrorMessage name="email" component={ErrorDisplay} />
                                </div>
                            </div>
                            <div className="field">
                                <StyledField name="password" placeholder="Password" type="password" />
                                <div className="error">
                                    <ErrorMessage name="password" component={ErrorDisplay} />
                                </div>
                            </div>


                            <ButtonWrapper>

                                <p>Not a member?</p>
                                <Button type = "button" onClick={handleSignUp} >Sign up</Button>
                            </ButtonWrapper>
                            
                            <ButtonFooter type="submit" disabled={!isValid || isSubmitting}>
                                {isSubmitting ? 'inprocess' : 'Log in'}
                            </ButtonFooter>

                        </Form>
                    )

                    }

                </Formik>
            </FormWrapper>
        </div>
    )
}

export default LogIn;