

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

const pathToImg = '/assets/images/smartphones/blackberry/'

export default () => (
  <div className="grid">
    <Head>
      <title>Blackberry - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Blackberry</PageHeader>

    <Phone>
      <Link to="/blackberry-z10-preise">
        <img src={`${pathToImg}z10.jpg`} alt="" />
        <p>Blackberry Z10</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/blackberry-z30-reparatur-preise">
        <img src={`${pathToImg}z30.jpg`} alt="" />
        <p>Blackberry Z30</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/blackberry-classic-preise">
        <img src={`${pathToImg}classic.jpg`} alt="" />
        <p>Blackberry Classic</p>
      </Link>
    </Phone>
  </div>
)
