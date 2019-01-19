
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

const pathToImg = '/assets/images/macs/'

export default () => (
  <div className="grid">
    <Head>
      <title>Macbooks - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Macbooks</PageHeader>
    <Phone>
      <Link to="/apple-macbook-air-11-6-reparatur-preise">
        <img src={`${pathToImg}air11.jpg`} alt="" />
        <p>Apple MacBook Air 11.6</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-macbook-air-13-3-preise">
        <img src={`${pathToImg}air13.jpg`} alt="" />
        <p>Apple MacBook Air 13.3</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-macbook-pro-13-3-preise">
        <img src={`${pathToImg}pro13.jpg`} alt="" />
        <p>Apple MacBook Pro 13.3</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-macbook-pro-15-4-preise">
        <img src={`${pathToImg}pro15.jpg`} alt="" />
        <p>Apple MacBook Pro 15.4</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-macbook-pro-17-preise">
        <img src={`${pathToImg}pro17.jpg`} alt="" />
        <p>Apple MacBook Pro 17</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-macbook-pro-retina-13-3">
        <img src={`${pathToImg}retina13.jpg`} alt="" />
        <p>Apple MacBook Pro Retina 13.3</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-macbook-pro-retina-15-4">
        <img src={`${pathToImg}retina15.jpg`} alt="" />
        <p>Apple MacBook Pro Retina 15.4</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-macbook-pro-retina-17">
        <img src={`${pathToImg}retina17.jpg`} alt="" />
        <p>Apple MacBook Pro Retina 17</p>
      </Link>
    </Phone>
  </div>
)
