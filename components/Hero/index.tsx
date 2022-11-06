import styled from "styled-components"
import { Button, ButtonIcon, ButtonText, Paragraph, Title } from "../Global"

const Hero = styled.section`
  background: #C3EAD8;
`

const HeroContainer = styled.div`
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
`

const HeroWrapper = styled.div`
  padding: 60px 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 60px;

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`

const HeroImageWrapper = styled.div`
  width: 100%;
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`


export default function HeroSection() {
  return (
    <Hero>
      <HeroContainer>
        <HeroWrapper>
          <HeroContent>
            <Title>Easy way to make online payments and secure</Title>
            <Paragraph>Pay and get paid in real-time with zero fees. Secure, streamlined, and super fast.</Paragraph>
            <Button>
              <ButtonIcon src="/cloud.svg" />
              <ButtonText>Download app</ButtonText>
            </Button>
          </HeroContent>

          <HeroImageWrapper>
            <HeroImage src="/images/hero.png" />
          </HeroImageWrapper>
        </HeroWrapper>
      </HeroContainer>
    </Hero>
  )
}