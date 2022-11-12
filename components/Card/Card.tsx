import styled from "styled-components";
import { Button, ButtonIcon, ButtonText } from "../Global";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media screen and (min-width: 1440px) {
    gap: 300px;
  }
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

interface ContentWrapperProps {
  primary: boolean;
}

const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 60px;

  @media screen and (min-width: 1024px) {
    order: ${({ primary }) => primary ? 1 : 2};
  }
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
  font-size: 1.5rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const ContentDesc = styled.p`
  font-size: 1rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 85%;
  }
`;

interface ImageWrapperProps {
  primary: boolean;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    order: ${({ primary }) => primary ? 2 : 1};
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 418px;
  }

  @media screen and (min-width: 1024px) {
    height: auto;
    width: 100%;
    object-fit: scale-down;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: -55%;
    width: auto;
    height: 670px;
  }
`;

export default function Cards() {
  return (
    <CardWrapper>
      <Card primary={true} cardTitle={"Easy payments and invoicing"} cardBg={"#F8E7DF"} cardImgLink={"/images/card-1.png"} /> 
      <Card primary={false} cardTitle={"Smart dashboard, powerful integrations"} cardBg={"#EEF2FB"} cardImgLink={"/images/card-2.png"} /> 
      <Card primary={true} cardTitle={"Better cash control with Upay Flow"} cardBg={"#E1F5EB"} cardImgLink={"/images/card-3.png"} /> 
    </CardWrapper>
  )
}

interface CardProps {
  primary: boolean;
  cardTitle: string;
  cardBg: string;
  cardImgLink: string;
}

function Card({ primary, cardTitle, cardBg, cardImgLink }: CardProps) {
  return (
    <CardItem background={cardBg}>
      <ContentWrapper primary={primary}>
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
            <ButtonText className="sub-button">Download app</ButtonText>
          </Button>
          <Button primary={false}>
            <ButtonText className="sub-button">Sign up</ButtonText>
            <ButtonIcon src="/user-btn.svg" />
          </Button>
        </Content>
      </ContentWrapper>

      <ImageWrapper primary={primary}>
        <Image src={cardImgLink} />
      </ImageWrapper>
    </CardItem>
  );
}
