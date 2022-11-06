import styled from "styled-components"

const Hero = styled.section`
  background: #C3EAD8;
`

const HeroContainer = styled.div`
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
`

const HeroWrapper = styled.div`
  padding: 24px 16px;

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`

export default function HeroSection() {
  return (
    <Hero>
      <HeroContainer>
        <HeroWrapper>Makan bang</HeroWrapper>
      </HeroContainer>
    </Hero>
  )
}