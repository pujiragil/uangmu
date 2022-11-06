import styled from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 52px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
  }
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`

export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 40px;
  border-radius: 999px;
  border: none;
  outline: none;
  background: #000;
`

export const ButtonIcon = styled.img`
  width: 28px;
  height: 28px;
`

export const ButtonText = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
`