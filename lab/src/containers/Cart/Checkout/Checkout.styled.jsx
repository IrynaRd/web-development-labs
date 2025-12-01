import styled from 'styled-components';
import { Field } from "formik";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    
    .field {
        flex: 1;
    }
`;

const FieldStyle = `
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #444444;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    margin-bottom: 14px;
`;

export const StyledField = styled(Field)`
    ${FieldStyle}
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SuccessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 70px;
`;