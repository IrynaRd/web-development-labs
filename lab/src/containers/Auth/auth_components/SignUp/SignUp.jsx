import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../Catalog/Catalog.styled";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { FormWrapper, InputWrapper, StyledField, ButtonsWrapper, SuccessWrapper } from "../../../Cart/Checkout/Checkout.styled";


const ErrorDisplay = ({children}) => {
    return (
        <span>
            {children}
        </span>
    )
};

const SignUp = () => {
    const navigate = useNavigate();
    const {logIn} = useAuth();
    const initialValues = {
        user_name: "",
        email: "",
        password: "",
        retype_password: "",
    };

    const validationSchema = Yup.object({
        user_name: Yup.string()
            .min(3, "Should be more than 3 characters")
            .required("User name is required"),
        email: Yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Incorrect email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required"),
        retype_password: Yup.string()
            .required("Password retype is required"),
    });

    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);
        

        setTimeout(() => {
            console.log("signUp: ", values.email);
            setSubmitting(false);
            logIn(values.email)
            navigate('/', {replace: true});
            setSubmitting(false);
        }, 5);

    };


    return (
        <div>
            <FormWrapper>
                <h1 style={{ textAlign: 'center', fontSize: '35px', marginBottom: '37px' }}>Register the new account</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isValid, isSubmitting, setValues }) => (
                        <Form>
                            <div className="field">
                                <StyledField name="user_name" placeholder="Username" />

                                <div className="error">
                                    <ErrorMessage name="user_name" component={ErrorDisplay} />
                                </div>
                            </div>

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

                            <div className="field" >
                                <StyledField name="retype_password" placeholder="Retype password" type="retype_password" style={{ width: "100%" }} />
                                <div className="error">
                                    <ErrorMessage name="retype_password" component={ErrorDisplay} />
                                </div>
                            </div>

                            <div>
                                <p>Already a member?</p>
                                {/* <Button onClick={} >Sign in</Button> */}
                            </div>
                            <Button type="submit" disabled={!isValid || isSubmitting}>
                                {isSubmitting ? 'inprocess' : 'Sign me up'}
                            </Button>

                        </Form>
                    )

                    }

                </Formik>
            </FormWrapper>
        </div>
    )
};

export default SignUp;