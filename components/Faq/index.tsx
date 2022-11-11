  import { useState } from "react";
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

    @media screen and (min-width: 768px) {
      padding: 100px 20px;
    }

    @media screen and  (min-width: 1024px) {
      padding: 100px 2rem;
    }
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

    @media screen and (min-width: 1024px) {
      align-items: flex-start;
    }
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
    border: 1px solid #1d191f;
    outline: none;
    background: #fef86b;
  `;

  const ButtonIcon = styled.img`
    width: 1rem;
    height: auto;
    object-fit: cover;
  `;

  export default function FaqSection() {
    const [open, setOpen] = useState(2);

    const handleOpen = (id: number) => {
      if (open === id) {
        setOpen(0);
      } else {
        setOpen(id);
      }
    };

    return (
      <Faq>
        <FaqContainer>
          <FaqWrapper>
            <FaqTitle>Frequently Answered Questions</FaqTitle>

            <FaqContentWrapper>
              <FaqItem open={open} handleOpen={handleOpen} id={1} title={"Are there really zero fees?"} />
              <FaqItem open={open} handleOpen={handleOpen} id={2} title={"Is Uangmu secure?"} />
              <FaqItem open={open} handleOpen={handleOpen} id={3} title={"Does Uangmu replace my accounting software?"} />
              <FaqItem open={open} handleOpen={handleOpen} id={4} title={"Is Uangmu a bank?"} />
              <FaqItem open={open} handleOpen={handleOpen} id={5} title={"Are the payments really instant?"} />
              <FaqItem open={open} handleOpen={handleOpen} id={6} title={"Do my clients and vendors have to sign up for Uangmu too?"} />
              <FaqItem open={open} handleOpen={handleOpen} id={7} title={"How does Uangmu make money?"} />
            </FaqContentWrapper>
          </FaqWrapper>
        </FaqContainer>
      </Faq>
    );
  }

  interface FaqItemProps {
    open: number;
    handleOpen: Function;
    id: number;
    title: string;
  }

  function FaqItem({ open, handleOpen, id, title}: FaqItemProps) {
    return (
      <FaqContent>
        <Content>
          <Title>{title}</Title>
          {open === id && (
            <Desc>
              At Upay, we believe businesses shouldn’t have to wait or pay to
              access money they’ve already earned. We don’t charge you to sign up.
              We don’t charge you when you receive payments. And we don’t charge
              you when you make payments. There are zero fees. Seriously.
            </Desc>
          )}
        </Content>

        <FaqButton onClick={handleOpen.bind(this, id)}>
          {open === id ? (
            <ButtonIcon src="/min.svg" />
          ) : (
            <ButtonIcon src="/plus.svg" />
          )}
        </FaqButton>
      </FaqContent>
    );
  }
