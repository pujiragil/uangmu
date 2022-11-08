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
`

const WhyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
            <Title>Why Uangmu</Title>
            <Paragraph>Please add a amount an account with whom you want to send your money and we will keep it very safe.</Paragraph>
          </Content>
          <Content gap="2rem">
            <Whys />
          </Content>
        </WhyWrapper>
      </WhyContainer>
    </Why>
  )
}