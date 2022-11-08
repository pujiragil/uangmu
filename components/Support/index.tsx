import styled from "styled-components"

const Support = styled.section`
  background: #FFFEF0;
  color: #1B1717;
`

const SupportContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
`

const SupportWrapper = styled.div`
  padding: 80px 1rem;
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 52px;
`

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
`

const SupportButton = styled.button`
  border: none;
  outline: none;
  width: fit-content;
  border-radius: 999px;
  background: #1B1717;
  color: #FAFAFA;
  padding: 20px 40px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
`

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
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