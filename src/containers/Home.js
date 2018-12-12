import React from 'react'
import { withSiteData } from 'react-static'
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
    <HeroBanner>
      <div className="text">
        <h1>iSett Handyreparatur</h1>
        <p>Express iPhone, Smartphone, Tablet & Computer Reparatur</p>
      </div>
    </HeroBanner>
    <Services>
      <div className="text">
      Das Team von iSett bietet seinen Kunden hochklassigen Service bei der Handy Reparatur in Berlin - an unserem Standort am Kudamm sind wir Mo. - Fr. zwischen 10.00 und 19.00 Uhr, sowie Samstags zwischen 11.00 und 17.00 Uhr für Sie da. Wir bieten iPhone, Smartphone, Tablet, iPad und Macbook Reparaturen in Berlin an, dabei sind wir sowohl auf Software- als auch auf Hardwareprobleme spezialisiert. Mac Produkte wie auch Android-basierte Handys können bei uns in Reparatur gegeben werden. Für jedes Problem bieten wir umfassende Lösungen - gern beraten unsere fachlich ausgebildeten Mitarbeiter Sie vor der iPhone- oder Handy Reparatur an unsererm iSett Standort in Berlin Charlottenburg.
      </div>

      <Grid>
        <div className="service">
          <img src={SmartphoneIcon} alt="" />
          <h2>kostenlose Diagnose</h2>
          <p>Wenn Ihr Gerät nicht repariert werden kann oder es macht keinen Sinn es zu reparieren, brauchen Sie nichts zu bezahlen.</p>
        </div>
        <div className="service">
          <img src={WavesIcon} alt="" />
          <h2>ch. Reinigung bei Wasserschaden</h2>
          <p>Falls Ihr Gerät nass geworden ist, kommen Sie bitte schnellstmöglich zu uns. Reis hilft nicht! Isopropanol 99,9% hilft aber sehr gut!</p>
        </div>
        <div className="service">
          <img src={TimeIcon} alt="" />
          <h2>Express Reparatur vor Ort</h2>
          <p>viele Reparaturen sind innerhalb von ca. 30-40 min. möglich, da wir eine Werkstatt vor Ort haben.</p>
        </div>
      </Grid>
    </Services>
  </div>
))
