import styled from "styled-components"

const Email = styled.section`
  background: #FAFAFA;
  color: #1D191F;
`

const EmailContainer = styled.div`
  max-width: 1440px;
  min-height: auto;
  margin: 0 auto;
  padding: 100px 1rem;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
  }
`

const EmailWrapper = styled.div`
  background: #1C4F38;
  padding: 80px 20px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 768px) {
    padding: 80px 45px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`

const TitleEmail = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 42px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

const EmailField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: fit-content;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

const EmailInput = styled.input`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  width: 100%;
  padding: 20px;
  border-radius: 999px;
  background: #FAFAFA;
  border: none;
  outline: none;

  &::placeholder {
    opacity: .7;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media screen and (min-width: 1440px) {
    font-size: 1.2rem;
  }
`

const EmailButton = styled(EmailInput)`
  background: #FEF86B;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: fit-content;
    padding: 20px 40px;
  }
`


export default function EmailSection() {
  return (
    <Email>
      <EmailContainer>
        <EmailWrapper>
          <TitleEmail>Freakishly simple. Downright useful. Ready to make the jump?</TitleEmail>

          <EmailField>
            <EmailInput type={"text"} placeholder={"Enter your work email"}/>
            <EmailButton type={"submit"} value={"Sign me Up"} />
          </EmailField>
        </EmailWrapper>
      </EmailContainer>
    </Email>
  )
}