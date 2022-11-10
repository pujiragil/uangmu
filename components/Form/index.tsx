import styled from "styled-components"

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const FormInput = styled.input`
  padding: 20px 40px;
  border: 1px solid #A9A547;
  color: #A9A547;
  background: transparent;
  border-radius: 6px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  outline: none;

  &::placeholder {
    opacity: 1;
  }

  &:focus {
    background: #FEFBB5;
    border: 2px solid #AAA98D;
    color: #1D191F;

    &::placeholder {
      color: #A9A547;
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(50% - 16px);
  }
`

const FormTextarea = styled.textarea`
  border: 1px solid #A9A547;
  color: #A9A547;
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  border-radius: 6px;
  outline: none;
  height: 120px;
  width: 100%;

  &::placeholder {
    opacity: 1;
  }

  &:focus {
    border: 2px solid #AAA98D;
    color: #1D191F;
    background: #FEFBB5;


    &::placeholder {
      color: #A9A547;
    }
  }
`

const FormAgreement = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #7F7C35;
`

const AgreementText = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`

const Checkbox = styled.label`
  position: relative;
  width: 25px;
  height: 25px;

  & > .checkbox {
    opacity: 0;
    position: absolute;
    border-radius: 5px;
  }

  & > .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 25px;
    width: 25px;
    background: transparent;
    border: 2px solid #A9A547;
    cursor: pointer;
    border-radius: 2px;

    &::after {
      position: absolute;
      content: "";
      left: 12px;
      top: 12px;
      height: 0px;
      border-radius: 2px;
      width: 0px;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(0deg) scale(0);
      -ms-transform: rotate(0deg) scale(0);
      transform: rotate(0deg) scale(0);
      opacity: 1;
    }
  }

  & > .checkbox:checked ~ .checkbox-custom {
    background: transparent;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    border-radius: 2px;
    opacity: 1;
    border: 2px solid #A9A547;
  }

  & > .checkbox:checked ~ .checkbox-custom::after {
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 32%;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid #A9A547;
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0; 
  }
`

const FormSubmit = styled.input`
  width: 100%;
  padding: 20px 40px;
  border-radius: 6px;
  background: #333215;
  color: #FAFAFA;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  border: none;
  outline: none;
  cursor: pointer;
`


export default function FormSection() {
  return (
    <Form>
      <FormInput placeholder="First Name" required />
      <FormInput placeholder="Last Name" required />
      <FormInput placeholder="Email Address" type={"email"} required />
      <FormInput placeholder="Your Text" required />
      <FormTextarea spellCheck={false} placeholder="Your Text" />
      <FormAgreement>
        <CustomCheckbox/>
        <span></span>
        <AgreementText>I agree that braintree may contact me at the email address or phone number above.</AgreementText>
      </FormAgreement>
      <FormSubmit value={"Submit"} type={"submit"}/>
    </Form>
  )
}

function CustomCheckbox() {
  return (
    <Checkbox>
      <input type={"checkbox"} className="checkbox" />
      <span className="checkbox-custom"></span>
    </Checkbox>
  )
}