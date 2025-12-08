import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../Catalog/Catalog.styled";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { FormWrapper, StyledField } from "../../../Cart/Checkout/Checkout.styled";
import { ButtonWrapper, ButtonFooter } from "../LogIn/LogIn.styled";


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
            .oneOf([Yup.ref('password'), null], "Password should be the same")
            .required("Password retype is required"),
    });

    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);
        localStorage.setItem('signUpData', JSON.stringify(values));

        setTimeout(() => {
            console.log("signUp: ", values.email);
            setSubmitting(false);
            logIn(values.email)
            navigate('/', {replace: true});
            setSubmitting(false);
        }, 5);

    };

    const handleFulfill = (setValues) => {
        const storedData = localStorage.getItem('signUpData');
        
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setValues(parsedData);
            } catch (error) {
                console.error("Error parsing stored data:", error);
                localStorage.removeItem('signUpData');
            }
        } else {
            alert("nothing saved to signUpData");
        }
    };

    const handleLogIn = () => {
        navigate('/login')
    }


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

                            <ButtonWrapper>
                                <p>Already a member?</p>
                                <Button type = "button" onClick={handleLogIn} >Sign in</Button>
                            </ButtonWrapper>
                            <ButtonFooter type="submit" disabled={!isValid || isSubmitting}>
                                {isSubmitting ? 'inprocess' : 'Sign me up'}
                            </ButtonFooter>
                            <Button type="button" onClick={()=>handleFulfill(setValues)}>Fulfill</Button>
                        </Form>
                    )

                    }

                </Formik>
            </FormWrapper>
        </div>
    )
};

export default SignUp;