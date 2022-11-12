import styled from "styled-components";

const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;

const Why = styled.div`
  position: relative;
  top: 0;
  right: 0;
  text-align: left;
  background: #fafafa;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1d191f;
  border-radius: 1rem;
  gap: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #c9ecdc;
  }

  &:hover div .wrapper {
    transition: 0.5s ease-in;
    background: #fafafa;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      top: -20px;
      right: -20px;
      box-shadow: -20px 20px #FEF86B;
    }

    &:hover div .wrapper {
      transition: 0.3s ease-in;
    } 
  }
`;

const WhyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  padding: 12px;
  border-radius: 8px;
  background: #fef86b;
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

const WhyTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 42px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const WhyDesc = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const WhyHighlight = styled.p`
  font-size: 18px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export default function Whys() {
  return (
    <WhyContainer>
      <Why>
        <WhyTitleWrapper>
          <IconWrapper className="wrapper">
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Secure</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>
          Upay transactions are protected by the latest encryption and security
          technology. We also leverage Plaid to keep businesses in our database
          safe.
        </WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>

      <Why>
        <WhyTitleWrapper>
          <IconWrapper className="wrapper">
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Instant</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>
          Upay transactions are protected by the latest encryption and security
          technology. We also leverage Plaid to keep businesses in our database
          safe.
        </WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>

      <Why>
        <WhyTitleWrapper>
          <IconWrapper className="wrapper">
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Fee-Free</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>
          Upay transactions are protected by the latest encryption and security
          technology. We also leverage Plaid to keep businesses in our database
          safe.
        </WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>

      <Why>
        <WhyTitleWrapper>
          <IconWrapper className="wrapper">
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Simple</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>
          Upay transactions are protected by the latest encryption and security
          technology. We also leverage Plaid to keep businesses in our database
          safe.
        </WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>
    </WhyContainer>
  );
}
