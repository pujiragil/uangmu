import styled from "styled-components"
import { Title } from "../Global"

const Partners = styled.section`
  background: #FAFAFA;
`

const PartnersContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-height: auto;
  }
`

const PartnersWrapper = styled.div`
  padding: 100px 1rem;
  display: flex;
  flex-direction: column;
  gap: 100px; 
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
  }
`

const PartnersImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    justify-items: center;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 2rem;
  }
`

const PatnersItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  border-radius: 1rem;
  transition: all .3s ease-in-out;

  &:hover {
    box-shadow: 15px 20px 50px rgba(0, 0, 0, 0.03);
  }

  @media screen and (min-width: 768px) {
    width: 445px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

const Image = styled.img`
  width: auto;
`

export default function PartnersSection() {
  return (
    <Partners>
      <PartnersContainer>
        <PartnersWrapper>
          <Title className="subheading">Trusted Partners</Title>
          <PartnersImageWrapper>
            <PatnersItems>
              <Image src="/fila.svg" />
            </PatnersItems>
            <PatnersItems>
              <Image src="/ritter.svg" />
            </PatnersItems>
            <PatnersItems>
              <Image src="/holland.svg" />
            </PatnersItems>
            <PatnersItems>
              <Image src="/puma.svg" />
            </PatnersItems>
            <PatnersItems>
              <Image src="/adidas.svg" />
            </PatnersItems>
            <PatnersItems>
              <Image src="/nike.svg" />
            </PatnersItems>
          </PartnersImageWrapper>
        </PartnersWrapper>
      </PartnersContainer>
    </Partners>
  )
}