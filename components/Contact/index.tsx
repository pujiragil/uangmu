import styled from "styled-components"
import FormSection from "../Form";

const Contact = styled.section`
  background: #FFFEF0;
  color: #333215;
`

const ContactContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-height: auto;
  }
`

const ContactWrapper = styled.div`
  width: 100%;
  padding: 100px 1rem;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
    flex-direction: row;
    gap: 2rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`

interface ContentProps {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  gap?: string;
  xlSize?: string;
}

const Content = styled.div<ContentProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : "row"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "center" };
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  gap: ${({ gap }) => gap ? gap : "unset"};

  @media screen and (min-width: 1024px) {
    justify-content: ${({ xlSize }) => xlSize && xlSize};
  }
`

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`

const Title = styled.h2`
  font-size: 44px;
  line-height: 72px;
  font-weight: 600;
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`

export default function ContactSection() {
  return (
    <Contact>
      <ContactContainer>
        <ContactWrapper>
          <Content xlSize="flex-start">
            <Image src="/contact.svg" />
          </Content>
          <Content justifyContent="flex-start" alignItems="flex-start" flexDirection="column" gap="60px">
            <TextWrapper>
              <Title>Connect With Our Sales Team</Title>
              <Paragraph>Our sales team always active to support you. Any kind of questions about to our product they can answer to you.</Paragraph>
            </TextWrapper>

            <FormSection />
          </Content>
        </ContactWrapper>
      </ContactContainer>
    </Contact>
  )
}