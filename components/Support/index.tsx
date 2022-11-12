import styled from "styled-components"

const Support = styled.section`
  background: #FFFEF0;
  color: #1B1717;
`

const SupportContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-height: auto;
  }
`

const SupportWrapper = styled.div`
  padding: 80px 1rem;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
    gap: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
    flex-direction: row;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 1024px) {
    order: 1;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const SupportButton = styled.button`
  border: none;
  outline: none;
  width: fit-content;
  border-radius: 999px;
  background: #1B1717;
  color: #FAFAFA;
  padding: 20px 40px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    order: 2;
    justify-content: flex-end;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 624px;
  }

  @media screen and (min-width: 1024px) {
    width: 438px;
  }
`

export default function SupportSection() {
  return (
    <Support>
      <SupportContainer>
        <SupportWrapper>
          <ImageWrapper>
            <Image src="/support.svg" />
          </ImageWrapper>

          <ContentWrapper>
            <Content>
              <Paragraph>SUPPORT IN ANY LANGUAGES</Paragraph>
              <Title>World class support is available 24/7</Title>
              <Paragraph>Customers satisfations is our main goal. We give our best for our cutomers and always try to make our clients happy. We can give you any kind of support with any languages.</Paragraph>
            </Content>
            <SupportButton>Read more...</SupportButton>
          </ContentWrapper>
        </SupportWrapper>
      </SupportContainer>
    </Support>
  )
}