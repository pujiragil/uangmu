import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  &.subheading {
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 3rem;

    &.subheading {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;

    &.half {
      width: 60%;
    }
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.1rem;

  &.subparagraph {
    font-size: 1rem;
  }

  &.left {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;

    &.subparagraph {
      font-size: 1.2rem;
    }

    &.half {
      width: 50%;
    }

    &.why {
      width: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    &.why {
      width: 40%;
    }
  }
`;

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
  border: 1px solid #1d191f;
  outline: none;
  color: ${({ primary }) => (primary ? "#FAFAFA" : "#1D191F")};
  background: ${({ primary }) => (primary ? "#1D191F" : "transparent")};
`;

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const ButtonText = styled.p`
  font-size: 1.1rem;
  font-weight: 400;

  &.sub-button {
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;

    &.sub-button {
      font-size: 1.2rem;
    }
  }
`;
