import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import HeroBannerImg from '../hero-banner.jpg'

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
    font-size: 70px;
  }
`

const Services = styled.section`
  padding: 2em;
  background: #f8f8f8;
  .service {
    flex: 1;
    margin: 0 1em;
    text-align: center;
    padding: 10em 0 2em 0;
  }
  p {
    font-size: 13px;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
    color: #002434;
  }
`

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`

export default withSiteData(() => (
  <div>
    <HeroBanner>
      <h1>iSett Handyreparatur</h1>
    </HeroBanner>
    <Services>
      <Grid>
        <div className="service">
          <h2>kostenlose Diagnose</h2>
          <p>Wenn Ihr Gerät nicht repariert werden kann oder es macht keinen Sinn es zu reparieren, brauchen Sie nichts zu bezahlen.</p>
        </div>
        <div className="service">
          <h2>ch. Reinigung bei Wasserschaden</h2>
          <p>Falls Ihr Gerät nass geworden ist, kommen Sie bitte schnellstmöglich zu uns. Reis hilft nicht! Isopropanol 99,9% hilft aber sehr gut!</p>
        </div>
        <div className="service">
          <h2>Express Reparatur vor Ort</h2>
          <p>viele Reparaturen sind innerhalb von ca. 30-40 min. möglich, da wir eine Werkstatt vor Ort haben.</p>
        </div>
      </Grid>
    </Services>
  </div>
))
