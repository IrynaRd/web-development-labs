import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import SuccessImage from "../../../assets/icons/done.png";
import {Button} from "../../Catalog/Catalog.styled";
import { FormWrapper, InputWrapper, StyledField, ButtonsWrapper, SuccessWrapper } from "./Checkout.styled";
import { useSelector, useDispatch } from "react-redux";
import { clearList } from "../../../states/cartList/cartList";

const ErrorDisplay = ({children}) => {
    return (
        <span>
            {children}
        </span>
    )
};

const Success = () => {
    const navigate = useNavigate();
    const handleToCatalog = () => {
        navigate(`/catalog`); 
    };
    return (
        <SuccessWrapper>         
                <img src={SuccessImage} alt="successImg" />
                <h2>Your order was sent to processing!</h2>
                <h2>Check your email box for further information.</h2>
                <Button onClick={handleToCatalog}>Back to Catalog</Button>
        </SuccessWrapper>
    )
}

const Checkout = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    const dispatch = useDispatch();


    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
    };

    const validationSchema = Yup.object({

        first_name: Yup.string()
            .min(3, "Should more than 3 characters")
            .required("First name is required"),
        last_name: Yup.string()
            .min(3, "Should more than 15 characters")
            .required("Last name is required"),
        email: Yup.string()
            .email("Incorrect email format")
            .required("Email is required"),

        phone: Yup.number()    
            .integer("Only integers")
            .required("Phone is required"),
        address: Yup.string()
            .matches(/вул/gi, "add street to address")
            .required("Address is required"),
    });

    const onSubmit = (values, {setSubmitting}) => {
        setSubmitting(true);
        localStorage.setItem('checkoutData', JSON.stringify(values));

        setTimeout(() => {
            console.log("Success submit:", values);
            setSubmitting(false);
            navigate(`/cart/checkout/success`);
            dispatch(clearList());
        }, 5);

    };

    const cartItems = useSelector((state) => state.cart.items);

    const handleFulfill = (setValues) => {
        const storedData = localStorage.getItem('checkoutData');
        
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setValues(parsedData);
            } catch (error) {
                console.error("Error parsing stored data:", error);
                localStorage.removeItem('checkoutData');
            }
        } else {
            alert("nothing saved");
        }
    };

    return (
        <div>
            <FormWrapper>
                <h1 style= {{textAlign:'center', fontSize: '35px', marginBottom: '37px'}}>Checkout</h1>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isValid, isSubmitting, setValues }) => (
                        <Form>
                            <InputWrapper>
                            
                                <div className="field">
                                    <StyledField name="first_name" placeholder="First name" />

                                    <div className="error">
                                        <ErrorMessage name="first_name" component={ErrorDisplay}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <StyledField name="last_name" placeholder="Last name" />
                                    <div className="error">
                                        <ErrorMessage name="last_name" component={ErrorDisplay} />
                                    </div>
                                </div>
                            </InputWrapper>

                            <InputWrapper>
                                <div className="field">
                                    <StyledField name="email" placeholder="Email" type="email" />
                                    <div className="error">
                                        <ErrorMessage name="email" component={ErrorDisplay} />
                                    </div>
                                </div>
                                <div className="field">
                                    <StyledField name="phone" placeholder="Phone" type="phone" />
                                    <div className="error">
                                        <ErrorMessage name="phone" component={ErrorDisplay} />
                                    </div>
                                </div>
                            </InputWrapper>


                            <div className="field" >
                                <StyledField name="address" placeholder="Address" type="address" style={{width: "100%"}}/>
                                <div className="error">
                                    <ErrorMessage name="address" component={ErrorDisplay} />
                                </div>
                            </div>

                            <ButtonsWrapper>
                                <Button type="submit" disabled={!isValid || isSubmitting}>
                                        {isSubmitting ? 'error' : 'Continue'}
                                </Button>

                                <Button onClick={handleGoBack} >Go back</Button>
                            </ButtonsWrapper>
                        </Form>
                    )

                    }

                </Formik>
            </FormWrapper>
        </div>
    )
}

export {Success};
export default Checkout;