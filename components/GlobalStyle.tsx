import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  .swiper-pagination, .swiper-pagination-bullets, .swiper-pagination-horizontal {
    bottom: 60px !important;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      bottom: 80px !important;
    }
  }

  .swiper-pagination .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background: transparent;
    border: 1px solid #FAFAFA;
    opacity: 1;

    @media screen and (min-width: 1024px) {
      border-width: 2px;
    }
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    border: 1px solid #E6E9F0;
    background: #FEF86B;
    border-radius: 999px;
    width: 20px;
    height: 20px;
  }
`