import styled from "styled-components"
import { Paragraph, Title } from "../Global";
import Whys from "./Why";

const Why = styled.section`
  background: #FAFAFA;
  color: #1D191F;
`

const WhyContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 16px;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
    min-height: auto;
  }
`

const WhyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }
`

interface ContentProps {
  gap?: string;
}

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ gap }) => gap ? gap : "20px"};
`

export default function WhySection() {
  return (
    <Why>
      <WhyContainer>
        <WhyWrapper>
          <Content>
            <Title className="subheading">Why Uangmu</Title>
            <Paragraph className="why subparagraph">Please add a amount an account with whom you want to send your money and we will keep it very safe.</Paragraph>
          </Content>
          
          <Whys />
        </WhyWrapper>
      </WhyContainer>
    </Why>
  )
}