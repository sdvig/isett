
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

const pathToImg = '/assets/images/smartphones/google/'

export default () => (
  <div className="grid">
    <Head>
      <title>Google - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Google</PageHeader>

    <Phone>
      <Link to="/google-pixel-reparatur-preise">
        <img src={`${pathToImg}pixel.jpg`} alt="" />
        <p>Google Pixel</p>
      </Link>
    </Phone>
  </div>
)
