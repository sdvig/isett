
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

const pathToImg = '/assets/images/phones/'

export default () => (
  <div className="grid">
    <PageHeader>iPhone Reparatur Preise</PageHeader>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 8</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-plus-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 8 Plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-7-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 7</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-7-plus-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 7 Plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-6-s-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 6 S</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-6-s-plus-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 6 S Plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-6-plus-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 6 Plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-6-reparatur-preise">
        <img src={`${pathToImg}7.jpg`} alt="" />
        <p>iPhone 6</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/iphone-se-reparatur-preise">
        <img src={`${pathToImg}se.jpg`} alt="" />
        <p>iPhone SE</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-5-s-reparatur-preise">
        <img src={`${pathToImg}5s.jpg`} alt="" />
        <p>iPhone 5 S</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-5-reparatur-preise">
        <img src={`${pathToImg}5.jpg`} alt="" />
        <p>iPhone 5</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-5-c-reparatur-preise">
        <img src={`${pathToImg}5c.jpg`} alt="" />
        <p>iPhone 5 C</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-4-s-reparatur-preise">
        <img src={`${pathToImg}5c.jpg`} alt="" />
        <p>iPhone 4 S</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-4-reparatur-preise">
        <img src={`${pathToImg}5c.jpg`} alt="" />
        <p>iPhone 4</p>
      </Link>
    </Phone>
  </div>
)
