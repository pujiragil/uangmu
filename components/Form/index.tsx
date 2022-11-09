import styled from "styled-components"

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export default function FormSection() {
  return (
    <Form>
      <FormInput placeholder="First Name" />
      <FormInput placeholder="Last Name" />
      <FormInput placeholder="Email Address" />
      <FormInput placeholder="Phone" />
      <FormTextarea placeholder="Your Text" />
    </Form>
  )
}