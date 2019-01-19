
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

const pathToImg = '/assets/images/smartphones/sony/'

export default () => (
  <div className="grid">
    <Head>
      <title>Sony - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Sony</PageHeader>
    <Phone>
      <Link to="/sony-xperia-z1-reparatur-preise">
        <img src={`${pathToImg}z1.jpg`} alt="" />
        <p>Sony Xperia Z1</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony-xperia-z1-compact-preise">
        <img src={`${pathToImg}z1-compact.jpg`} alt="" />
        <p>Sony Xperia Z1 Compact</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony-xperia-z2-reparatur-preise">
        <img src={`${pathToImg}z2.jpg`} alt="" />
        <p>Sony Xperia Z2</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony-xperia-z3-reparatur-preise">
        <img src={`${pathToImg}z3.jpg`} alt="" />
        <p>Sony Xperia Z2</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony-xperia-z3-compact-preise">
        <img src={`${pathToImg}z3-compact.jpg`} alt="" />
        <p>Sony Xperia Z3 Compact</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony-xperia-z4-reparatur-preise">
        <img src={`${pathToImg}z4.jpg`} alt="" />
        <p>Sony Xperia Z4</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony-xperia-z5-reparatur-preise">
        <img src={`${pathToImg}z5.jpg`} alt="" />
        <p>Sony Xperia Z5</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony-xperia-z5-compact-preise">
        <img src={`${pathToImg}z5-compact.jpg`} alt="" />
        <p>Sony Xperia Z5 Compact</p>
      </Link>
    </Phone>
  </div>
)
