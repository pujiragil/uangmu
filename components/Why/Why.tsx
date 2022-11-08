import styled from "styled-components"

const Why = styled.div`
  text-align: left;
  background: #FAFAFA;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1D191F;
  border-radius: 1rem;
  gap: 20px;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    background:#C9ECDC;
  }
`

const WhyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IconWrapper = styled.div`
  padding: 12px;
  border-radius: 8px;
  background: #FEF86B;
`

const Icon = styled.img`
  width: 36px;
  height: 36px;
`

const WhyTitle = styled.h3`
  font-size: 2rem;
  line-height: 42px;
  font-weight: 600;
`

const WhyDesc = styled.p`
  width: 100%;
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
`

const WhyHighlight = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`

export default function Whys() {
  return (
    <>
      <Why>
        <WhyTitleWrapper>
          <IconWrapper>
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Secure</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.</WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>

      <Why>
        <WhyTitleWrapper>
          <IconWrapper>
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Instant</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.</WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>

      <Why>
        <WhyTitleWrapper>
          <IconWrapper>
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Fee-Free</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.</WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>

      <Why>
        <WhyTitleWrapper>
          <IconWrapper>
            <Icon src="why-1.svg" />
          </IconWrapper>
          <WhyTitle>Simple</WhyTitle>
        </WhyTitleWrapper>
        <WhyDesc>Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.</WhyDesc>
        <WhyHighlight>Learn more...</WhyHighlight>
      </Why>
    </>
  )
}