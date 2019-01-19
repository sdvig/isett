
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
const pathToImg = '/assets/images'

export default () => (
  <div className="grid">
    <Head>
      <title>Andere Geräte - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Andere Geräte</PageHeader>
    <Phone>
      <Link to="/smartphones">
        <img src={`${pathToImg}/smartphones/samsung/s8.jpg`} alt="" />
        <p>Smartphones</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/macbooks">
        <img src={`${pathToImg}/macs/macs.jpg`} alt="" />
        <p>MacBooks</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/ipads">
        <img src={`${pathToImg}/ipads/air.jpg`} alt="" />
        <p>iPads</p>
      </Link>
    </Phone>
  </div>
)
