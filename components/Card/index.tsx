import styled from "styled-components";
import { Title } from "../Global";
import Cards from "./Card";

const Card = styled.section`
  background: #fafafa;
  color: #1d191f;
`;

const CardContainer = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-height: auto;
  }
`;

const CardWrapper = styled.div`
  padding: 100px 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 100px;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
  }
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

interface DescProps {
  subtitle: boolean;
}

const CardDesc = styled.p<DescProps>`
  font-size: 18px;
  line-height: 23px;
  font-weight: ${({ subtitle }) => (subtitle ? "600" : "400")};
  text-transform: ${({ subtitle }) => (subtitle ? "uppercase" : "none")};

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;



export default function CardSection() {
  return (
    <Card>
      <CardContainer>
        <CardWrapper>
          <CardContentWrapper>
            <CardDesc subtitle={true}>
              available at google and ios app store
            </CardDesc>
            <Title className="half">Built for the next generation of small business</Title>
            <CardDesc subtitle={false}>
              Hopscotch is an all-in-one payments platform where businesses can
              connect, transact, and grow together.
            </CardDesc>
          </CardContentWrapper>

          <Cards />
        </CardWrapper>
      </CardContainer>
    </Card>
  );
}
