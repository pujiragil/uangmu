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
`;

const ContentTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
`;

const ContentDesc = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

export default function Cards() {
  return (
    <CardWrapper>
      <CardItem background="#F8E7DF">
        <ContentWrapper>
          <Content>
            <ContentTitle>Easy payments and invoicing</ContentTitle>
            <ContentDesc>
              Pay and get paid like never before. Auto-generate invoices, send
              reminders, schedule payments, and instantly access money when
              someone pays you.
            </ContentDesc>
          </Content>

          <Content>
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
          <Image src="/images/card-1.png" />
        </ImageWrapper>
      </CardItem>
    </CardWrapper>
  );
}
