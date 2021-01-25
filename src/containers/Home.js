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
      font-size: 20px;
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
    font-size: 16px;
    line-height: 150%;
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
      <title>iPhone Reparatur Berlin ● Express mobile iPhone Reparatur </title>
    </Head>
    <HeroBanner>
      <div className="text">
        <h1>iSett Handyreparatur</h1>
        <p>Express mobile iPhone, iPad & Macbook Reparatur</p>
      </div>
    </HeroBanner>
    <Services>
    <div className="text">
    Die Corona-Pandemie hat gezeigt: Es geht viel mehr, als alle dachten. <br></br>Mobile Arbeit ist plötzlich Alltag geworden und hat das Leben einfacher gemacht. Wir bedanken uns sehr für die zahlreichen Feedbacks von unseren Kunden, die unsere neue mobile iPhone Reparatur wertgeschätzt haben. Sie haben uns ermutigt den mobilen Service weiter zu entwickeln. <br></br> Jetzt bieten wir ausschließlich einen mobilen Reparatur Service an. <br></br>Es macht uns eindeutig mehr Spaß und bringt unseren Kunden viel mehr Nutzen.<h2><a target="_blank" href="https://app.cituro.com/booking/isett">Bitte buchen Sie einen Termin - wir holen Ihr Gerät kontaklos ab.</a></h2> Meisten Reparaturen werden wie gewöhnt innerhalb von <u>30 Min.</u> in unserer mobilen Werkstatt erledigt. Nach der Reparatur wird Ihr Gerät repariert, selbstverständlich desinfiziert und zurück gebracht. Für Fragen stehen wir gerne unter <a href="tel:+493088925666">030 88925666</a> zur Verfügung!<br></br>Beste Grüße, Ihr iSett Team
    </div>

      <Grid>
        <div className="service">
          <a href="https://isett.de/iphone_reparatur_preise"><img src={SmartphoneIcon} alt="" /></a>
              </div>
        <div className="service">
          <a href="https://isett.de/kontakt"><img src={WavesIcon} alt="" /></a>
                </div>
        <div className="service">
          <a target="_blank" href="https://app.cituro.com/booking/isett"><img src={TimeIcon} alt="" /></a>
                </div>
      </Grid>
      
      <div id="cituro-rating-snippet"><script src="https://app.cituro.com/ratings/isett/snippet" async></script></div>

    </Services>
  </div>
))
