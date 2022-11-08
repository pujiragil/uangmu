import styled from "styled-components";
import { Title } from "../Global";

const Service = styled.section`
  background: #fafafa;
  color: #1D191F;
`;

const ServiceContainer = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-height: auto;
  }
`;

const ServiceWrapper = styled.div`
  padding: 80px 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 60px;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
    gap: 200px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
  }
`;

const ServiceCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 100px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  box-shadow: 55px 10px 50px rgba(0, 0, 0, 0.06);
  cursor: pointer;

  &:hover,
  &:active {
    box-shadow: 55px 10px 50px rgba(195, 234, 216, 1);
  }

  @media screen and (min-width: 1024px) {
    box-shadow: none;

    &:hover,
    &:active {
      box-shadow: 55px 10px 50px rgba(0, 0, 0, 0.06);
    }
  }
`;

const ServiceImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 416px;
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    top: -40%;
    left: 25%;
    width: 165px;
  }

  @media screen and (min-width: 1440px) {
    left: 30%;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 24px;
  line-height: 36px;
`;

const ServiceDesc = styled.p`
  font-size: 1rem;
  line-height: 18px;
`;

const ServiceHighlight = styled.p`
  font-size: 18px;
  line-height: 23px;
  font-weight: 600;
`;

export default function ServiceSection() {
  return (
    <Service>
      <ServiceContainer>
        <ServiceWrapper>
          <Title>How Does It Work</Title>

          <ServiceCardWrapper>
            <ServiceCard>
              <ServiceImage src="/service-1.svg" />
              <ServiceTitle>Download app</ServiceTitle>
              <ServiceDesc>
                But must explain mistake denouncie pleasure praisin was born
                complete
              </ServiceDesc>
              <ServiceHighlight>Read more...</ServiceHighlight>
            </ServiceCard>

            <ServiceCard>
              <ServiceImage src="/service-2.svg" />
              <ServiceTitle>Registration app</ServiceTitle>
              <ServiceDesc>
                But must explain mistake denouncie pleasure praisin was born
                complete
              </ServiceDesc>
              <ServiceHighlight>Read more...</ServiceHighlight>
            </ServiceCard>

            <ServiceCard>
              <ServiceImage src="/service-3.svg" />
              <ServiceTitle>Load your wallet</ServiceTitle>
              <ServiceDesc>
                But must explain mistake denouncie pleasure praisin was born
                complete
              </ServiceDesc>
              <ServiceHighlight>Read more...</ServiceHighlight>
            </ServiceCard>

            <ServiceCard>
              <ServiceImage src="/service-4.svg" />
              <ServiceTitle>Ready to go</ServiceTitle>
              <ServiceDesc>
                But must explain mistake denouncie pleasure praisin was born
                complete
              </ServiceDesc>
              <ServiceHighlight>Read more...</ServiceHighlight>
            </ServiceCard>
          </ServiceCardWrapper>
        </ServiceWrapper>
      </ServiceContainer>
    </Service>
  );
}
