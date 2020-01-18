import React from 'react'
import { withSiteData, Head } from 'react-static'
import styled from 'styled-components'
import HeroBannerImg from '../hero-banner.jpg'
import SmartphoneIcon from '../smartphone.svg'
import WavesIcon from '../waves.svg'
import TimeIcon from '../hourglass.svg'

const HeroBanner = styled.div`
  // background: #37ac50;
  height: 500px;
  background-image: url(${HeroBannerImg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
    color: #fff;
    font-size: 35px;
  }
  @media (min-width: 480px) {
    h1 { font-size: 50px; }
  }
  @media (min-width: 700px) {
    h1 { font-size: 70px; }
  }
  .text {
    display: block;
    text-align: center;
    p {
      color: rgb(0, 242, 255);
      margin-top: 2em;
    }
  }
`

const Services = styled.section`
  padding: 2em;
  background: #f8f8f8;
  .service {
    @media (min-width: 700px) {
      flex: 1;
    }
    margin: 0 1em;
    text-align: center;
    padding: 4em 0 2em 0;
    img {
      width: 7em;
      margin-bottom: 1em;
    }
  }
  p {
    font-size: 13px;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
    color: #002434;
  }
  .text {
    font-size: 13px;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4em 0 0;
    @media (min-width: 700px) {
      padding: 4em 3em 0;
    }
  }
`

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 700px) {
    display: flex;
  }
`

export default withSiteData(() => (
  <div>
    <Head>
      <title>iPhone Reparatur Berlin ● iPhone, Smartphone, Tablet & Laptop Reparatur in Berlin</title>
    </Head>
    <HeroBanner>
      <div className="text">
        <h1>iSett Handyreparatur</h1>
        <p>Express iPhone, Smartphone, Tablet & Laptop Reparatur</p>
      </div>
    </HeroBanner>
    <Services>
      <div className="text">
      Wir sind iSett und unser Credo lautet: wir reparieren Ihr iPhone, Smartphone, Tablet oder Laptop schnell, unkompliziert und qualitätvoll. Bei uns können Sie sicher sein, dass Sie nur das zahlen, was auch notwendig ist. Bei uns sind Ihre Daten sicher und bleiben anonym. Und meistens bekommen Sie Ihr Handy innerhalb einer Stunde zurück und es ist wie neu.
Uns gibt es bereits seit 2016 und wir haben schon zwei Filialen. Wenn Sie noch mehr wissen wollen, z.B. wie unser Patenkind heißt und was uns so besonders macht, dann klicken Sie <a href="http://isett.de/wer-wir-sind/">hier</a> und lesen Sie unsere Firmenphilosophie durch!

      </div>

      <Grid>
        <div className="service">
          <img src={SmartphoneIcon} alt="" />
              </div>
        <div className="service">
          <img src={WavesIcon} alt="" />
                </div>
        <div className="service">
          <img src={TimeIcon} alt="" />
                </div>
      </Grid>
    </Services>
  </div>
))
