
import React from 'react'
import { Link, Head } from 'react-static'
import styled from 'styled-components'
//

const PageHeader = styled.h1`
  font-weight: 300;
  margin-bottom: 2em;
`

const Phone = styled.div`
  text-align: center;
  display: inline-block;
  margin-right: 3em;
  a {
    display: block;
  }
  p {
    font-size: 13px;
  }
`

const More = styled.div`
  text-align: center;
  margin-top: 4em;
  font-weight: bold;
`

const pathToImg = '/assets/images/smartphones/htc/'

export default () => (
  <div className="grid">
    <Head>
      <title>HTC Reparatur Preise - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>HTC Reparatur Preise</PageHeader>

    <Phone>
      <Link to="/htc-m9-reparatur-preise">
        <img src={`${pathToImg}m9.jpg`} alt="" />
        <p>HTC M9</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/htc-m8-reparatur-preise">
        <img src={`${pathToImg}m8.jpg`} alt="" />
        <p>HTC M8</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/htc-m7-reparatur-preise">
        <img src={`${pathToImg}m7.jpg`} alt="" />
        <p>HTC M7</p>
      </Link>
    </Phone>
    <More>Weitere Modelle auf Anfrage</More>
  </div>
)
