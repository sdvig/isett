
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

const pathToImg = '/assets/images/smartphones/lg/'

export default () => (
  <div className="grid">
    <Head>
      <title>LG - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>LG</PageHeader>
    <Phone>
      <Link to="/lg-g3-reparatur-preise">
        <img src={`${pathToImg}g3.jpg`} alt="" />
        <p>LG G3</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/lg-g4-reparatur-preise">
        <img src={`${pathToImg}g4.jpg`} alt="" />
        <p>LG G4</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/lg-g5-reparatur-preise">
        <img src={`${pathToImg}g5.jpg`} alt="" />
        <p>LG G5</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/lg-g6-reparatur-preise">
        <img src={`${pathToImg}g6.jpg`} alt="" />
        <p>LG G6</p>
      </Link>
    </Phone>
  </div>
)
