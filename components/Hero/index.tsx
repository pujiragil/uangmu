import styled from "styled-components";
import { Button, ButtonIcon, ButtonText, Paragraph, Title } from "../Global";

const Hero = styled.section`
  background: #c3ead8;
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-height: auto;
  }
`;

const HeroWrapper = styled.div`
  padding: 60px 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 60px;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`;

const HeroButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const HeroExperienceWrapper = styled.div`
  display: none;
  color: #1D191F;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`;

const HeroExperienceItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  
  &:first-child {
    border-right: 1px solid #1D191F;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    width: 100%;

    &:first-child {
      width: 70%;
    }
  }
`;

const HeroExperienceLogo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    width: 584px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    object-fit: scale-down;
  }

  @media screen and (min-width: 1440px) {
    width: 584px;
  }
`;

export default function HeroSection() {
  return (
    <Hero>
      <HeroContainer>
        <HeroWrapper>
          <HeroContent>
            <Title>Easy way to make online payments and secure</Title>
            <Paragraph className="half">
              Pay and get paid in real-time with zero fees. Secure, streamlined,
              and super fast.
            </Paragraph>
            <HeroButtonWrapper>
              <Button primary={true}>
                <ButtonIcon src="/cloud.svg" />
                <ButtonText>Download app</ButtonText>
              </Button>

              <HeroExperienceWrapper>
                <HeroExperienceItem>
                  <HeroExperienceLogo src="/chart.svg" />
                  <Paragraph className="half left">Years of work experience</Paragraph>
                </HeroExperienceItem>
                <HeroExperienceItem>
                  <HeroExperienceLogo src="/hand.svg" />
                  <Paragraph className="half left">Satisfide and happy customers</Paragraph>
                </HeroExperienceItem>
              </HeroExperienceWrapper>
            </HeroButtonWrapper>
          </HeroContent>

          <HeroImageWrapper>
            <HeroImage src="/images/hero.png" />
          </HeroImageWrapper>
        </HeroWrapper>
      </HeroContainer>
    </Hero>
  );
}
