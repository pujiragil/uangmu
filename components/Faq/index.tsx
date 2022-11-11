import styled from "styled-components";

const Faq = styled.section`
  background: #fafafa;
  color: #1d191f;
`;

const FaqContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-height: auto;
  }
`;

const FaqWrapper = styled.div`
  padding: 100px 1rem;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const FaqTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 52px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 72px;
  }
`;

const FaqContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FaqContent = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #d7dbe6;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  line-height: 42px;
  background: #FAFAFA;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
`;

const FaqButton = styled.button`
  min-width: 30px;
  height: 30px;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1D191F;
  outline: none;
  background:#FEF86B;
`

const ButtonIcon = styled.img`
  width: 1rem;
  height: auto;
  object-fit: cover;
`

export default function FaqSection() {
  return (
    <Faq>
      <FaqContainer>
        <FaqWrapper>
          <FaqTitle>Frequently Answered Questions</FaqTitle>

          <FaqContentWrapper>
            <FaqContent>
              <Content>
                <Title>Are there really zero fees?</Title>
                <Desc>
                  At Upay, we believe businesses shouldn’t have to wait or pay
                  to access money they’ve already earned. We don’t charge you to
                  sign up. We don’t charge you when you receive payments. And we
                  don’t charge you when you make payments. There are zero fees.
                  Seriously.
                </Desc>
              </Content>

              <FaqButton>
                <ButtonIcon src="/min.svg" />
              </FaqButton>
            </FaqContent>
            <FaqContent>
              <Content>
                <Title>Is Uangmu secure?</Title>
              </Content>

              <FaqButton>
                <ButtonIcon src="/plus.svg" />
              </FaqButton>
            </FaqContent>
            <FaqContent>
              <Content>
                <Title>Does Upay replace my accounting software?</Title>
              </Content>

              <FaqButton>
                <ButtonIcon src="/plus.svg" />
              </FaqButton>
            </FaqContent>
            <FaqContent>
              <Content>
                <Title>Is Uangmu a bank?</Title>
              </Content>

              <FaqButton>
                <ButtonIcon src="/plus.svg" />
              </FaqButton>
            </FaqContent>
          </FaqContentWrapper>
        </FaqWrapper>
      </FaqContainer>
    </Faq>
  );
}
