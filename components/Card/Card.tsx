import styled from "styled-components";
import { Button, ButtonIcon, ButtonText } from "../Global";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

interface CardItemProps {
  background?: string;
}

const CardItem = styled.div<CardItemProps>`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-radius: 20px;
  background: ${({ background }) => (background ? background : "#EEF2FB")};

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 60px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    &.row {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;

    &.row {
      justify-content: flex-start;
    }
  }
`;

const ContentTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
    line-height: 52px;
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const ContentDesc = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;

  @media screen and (min-width: 1024px) {
    width: 85%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 418px;
  }

  @media screen and (min-width: 1024px) {
    height: 460px;
    object-fit: scale-down;
  }
`;

export default function Cards() {
  return (
    <CardWrapper>
      <Card cardTitle={"Easy payments and invoicing"} cardBg={"#F8E7DF"} cardImgLink={"/images/card-1.png"} /> 
      <Card cardTitle={"Smart dashboard, powerful integrations"} cardBg={"#EEF2FB"} cardImgLink={"/images/card-2.png"} /> 
      <Card cardTitle={"Better cash control with Upay Flow"} cardBg={"#E1F5EB"} cardImgLink={"/images/card-3.png"} /> 
    </CardWrapper>
  )
}

function Card({ cardTitle, cardBg, cardImgLink }) {
  return (
    <CardItem background={cardBg}>
      <ContentWrapper>
        <Content>
          <ContentTitle>{cardTitle}</ContentTitle>
          <ContentDesc>
            Pay and get paid like never before. Auto-generate invoices, send
            reminders, schedule payments, and instantly access money when
            someone pays you.
          </ContentDesc>
        </Content>

        <Content className="row">
          <Button primary={true}>
            <ButtonIcon src="/cloud.svg" />
            <ButtonText>Download app</ButtonText>
          </Button>
          <Button primary={false}>
            <ButtonText>Sign up</ButtonText>
            <ButtonIcon src="/user-btn.svg" />
          </Button>
        </Content>
      </ContentWrapper>

      <ImageWrapper>
        <Image src={cardImgLink} />
      </ImageWrapper>
    </CardItem>
  );
}
