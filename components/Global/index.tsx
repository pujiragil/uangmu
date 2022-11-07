import styled from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 52px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 72px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;

    &.half {
      width: 60%;
    }
  }
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  @media screen and (min-width: 768px) {
    &.half {
      width: 50%;
    }
  }

  &.left {
    text-align: left;
  }
`

interface ButtonProps {
  primary: boolean;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  min-width: 240px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 40px;
  border-radius: 999px;
  border: 1px solid #1D191F;
  outline: none;
  color: ${({ primary }) => primary ? "#FAFAFA" : "#1D191F"};
  background: ${({ primary }) => primary ? "#1D191F" : "transparent"};
`

export const ButtonIcon = styled.img`
  width: 28px;
  height: 28px;
`

export const ButtonText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
`