import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const Quote = styled.section`
  background: #FAFAFA;
  color: #1D191F;
`

const QuoteContainer = styled.div`
  max-width: 1440px;
  padding: 100px 1rem;
  margin: 0 auto;
  display: flex;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
  }
`

const QuoteItem = styled.div`
  cursor: pointer;
  background: #F8E7DF;
  border-radius: 20px;
  padding: 46px 20px 120px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    padding: 46px 60px 160px 60px;
  }
`

const QuoteIcon = styled.img`
  width: 40px;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 48px;
  }
`

const QuoteContent = styled.div`
  font-size: 1rem;
  font-weight: 400;

  & > .desc {
    margin-bottom: 24px;
  }

  & > .author {
    margin-bottom: 12px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`

export default function QuoteSection() {
  return (
    <Quote>
      <QuoteContainer>
        <Swiper modules={[Pagination, Autoplay]} spaceBetween={40} pagination={true} autoplay={{ delay: 2000 }}>
          <SwiperSlide>
            <QuoteItem>
              <QuoteIcon src="/quote.svg" />
              <QuoteContent>
                <p className="desc">“I was looking for a perfect paymant solution for my freelance business. I’m using WhoodPay as my primary payment method and I will recomanded everyone who needs a best payment solution.”</p>
                <p className="author">Al Razi Siam</p>
                <p>Founder Underrrated Studio</p>
              </QuoteContent>
            </QuoteItem>
          </SwiperSlide>
          <SwiperSlide>
            <QuoteItem>
              <QuoteIcon src="/quote.svg" />
              <QuoteContent>
                <p className="desc">“I was looking for a perfect paymant solution for my freelance business. I’m using WhoodPay as my primary payment method and I will recomanded everyone who needs a best payment solution.”</p>
                <p className="author">Al Razi Siam</p>
                <p>Founder Underrrated Studio</p>
              </QuoteContent>
            </QuoteItem>
          </SwiperSlide>
          <SwiperSlide>
            <QuoteItem>
              <QuoteIcon src="/quote.svg" />
              <QuoteContent>
                <p className="desc">“I was looking for a perfect paymant solution for my freelance business. I’m using WhoodPay as my primary payment method and I will recomanded everyone who needs a best payment solution.”</p>
                <p className="author">Al Razi Siam</p>
                <p>Founder Underrrated Studio</p>
              </QuoteContent>
            </QuoteItem>
          </SwiperSlide>
        </Swiper>
      </QuoteContainer>
    </Quote>
  )
}