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
        <p>Express mobile iPhone, iPad & Macbook Reparatur</p>
      </div>
    </HeroBanner>
    <Services>
    <div className="text">
    Die Corona-Pandemie hat gezeigt: Es geht viel mehr, als alle dachten. <br></br>Mobile Arbeit ist plötzlich Alltag geworden und hat das Leben einfacher gemacht.<br></br><br></br> Wir haben tolle Feedbacke gegenüber unserem mobilen Service während des ersten Lockdowns bekommen, sodass wir ab jetzt ausschließlich mobile arbeiten werden.<br></br><u>Bitte buchen Sie einen Termin - wir holen Ihr Gerät kontaklos ab.</u><br></br> Meisten Reparaturen werden wie gewöhnt innerhalb von 30 Min. in unserer Autowerkstatt erledigt, danach wird Ihr Gerät repariert (selbstverständlich desinfiziert) und zurück gebracht.
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
