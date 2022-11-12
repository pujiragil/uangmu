import styled from "styled-components";

const Footer = styled.footer`
  background: #c3ead8;
  color: #000;
`;

const FooterContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    min-height: auto;
  }
`;

const FooterWrapper = styled.div`
  padding: 100px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
  border-bottom: 1px solid #93d9b9;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    gap: 80px;
  }

  @media screen and (min-width: 1024px) {
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const FooterIcon = styled.img`
  width: 72px;
  height: auto;
  object-fit: cover;
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 70%;

  & > .title {
    font-size: 2rem;
    font-weight: 700;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  & > p {
    font-size: 1rem;
    font-weight: 400;
  }

  & > .social-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .social-item {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 20px;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;

  & > .title {
    font-size: 1.2rem;
    font-weight: 700;
  }

  & > .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > p {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  & > .app-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & > .app-item {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const Copy = styled.div`
  color: #1d191f;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 1024px) {
    & > p {
      width: 70%;
    }
  }
`;

export default function FooterSection() {
  return (
    <Footer>
      <FooterContainer>
        <FooterWrapper>
          <FooterIconWrapper>
            <FooterIcon src="/uangmu.svg" />
          </FooterIconWrapper>
          <FooterSocial>
            <h3 className="title">Uangmu</h3>
            <p>The cost of doing business shouldn’t cost so damn much.</p>
            <div className="social-wrapper">
              <div className="social-item">
                <img src="/instagram.svg" alt="instagram" />
              </div>
              <div className="social-item">
                <img src="/linkedin.svg" alt="linkedin" />
              </div>
              <div className="social-item">
                <img src="/facebook.svg" alt="facebook" />
              </div>
              <div className="social-item">
                <img src="/twitter.svg" alt="twitter" />
              </div>
            </div>
          </FooterSocial>
          <FooterMenu>
            <h3 className="title">Get in touch</h3>
            <div className="content-wrapper">
              <p>helloupay@email.com</p>
              <p>734 Broadway, Floor 5 New York, NY 10003</p>
            </div>
          </FooterMenu>
          <FooterMenu>
            <h3 className="title">Jump To</h3>
            <div className="content-wrapper">
              <p>Home</p>
              <p>Services</p>
              <p>Pricing</p>
              <p>About us</p>
              <p>Contact</p>
            </div>
          </FooterMenu>
          <FooterMenu>
            <h3 className="title">Legal</h3>
            <div className="content-wrapper">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </FooterMenu>
          <FooterMenu>
            <h3 className="title">Get the app</h3>
            <div className="app-wrapper">
              <div className="app-item">
                <img src="/playstore.svg" alt="playstore" />
              </div>
              <div className="app-item">
                <img src="/applestore.svg" alt="applestore" />
              </div>
            </div>
          </FooterMenu>
        </FooterWrapper>

        <Copyright />
      </FooterContainer>
    </Footer>
  );
}

function Copyright() {
  return (
    <Copy>
      <p>© Uangmu 2022</p>
      <p>
        Uangmu is a financial technology company, not a bank. Banking services
        are provided by Column N.A., member FDIC. “Column” is a registered
        trademark of Column National Association.
      </p>
    </Copy>
  );
}
