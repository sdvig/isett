
import React from 'react'
import { Link } from 'react-static'
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

const pathToImg = '/assets/images/ipads/'

export default () => (
  <div className="grid">
    <PageHeader>iPads</PageHeader>
    <Phone>
      <Link to="/apple-ipad-pro-12-9-preise">
        <img src={`${pathToImg}1x.jpg`} alt="" />
        <p>Apple iPad Pro 12.9</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-pro-10-5">
        <img src={`${pathToImg}1x.jpg`} alt="" />
        <p>Apple iPad Pro 10.5</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-pro-9-7">
        <img src={`${pathToImg}9.jpg`} alt="" />
        <p>Apple iPad Pro 9.7</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-air-2">
        <img src={`${pathToImg}air2.jpg`} alt="" />
        <p>Apple iPad Air 2</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-air">
        <img src={`${pathToImg}air.jpg`} alt="" />
        <p>Apple iPad Air</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-4-reparatur-preise">
        <img src={`${pathToImg}4.jpg`} alt="" />
        <p>Apple iPad 4</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-3-reparatur-preise">
        <img src={`${pathToImg}3.jpg`} alt="" />
        <p>Apple iPad 3</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-2-reparatur-preise">
        <img src={`${pathToImg}2.jpg`} alt="" />
        <p>Apple iPad 2</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-mini-2-reparatur-preise">
        <img src={`${pathToImg}mini.jpg`} alt="" />
        <p>Apple iPad mini 2</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/apple-ipad-mini-1-reparatur-preise">
        <img src={`${pathToImg}mini.jpg`} alt="" />
        <p>Apple iPad mini 1</p>
      </Link>
    </Phone>
  </div>
)
