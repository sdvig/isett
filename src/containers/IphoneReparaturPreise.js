
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
      <Link to="/iphone-11-reparatur-preise">
        <img src={`${pathToImg}iphone11.jpg`} alt="" />
        <p>iPhone 11</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-11pro-reparatur-preise">
        <img src={`${pathToImg}11pro.jpg`} alt="" />
        <p>iPhone 11 Pro</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-11pro-max-reparatur-preise">
        <img src={`${pathToImg}11pro.jpg`} alt="" />
        <p>iPhone 11 Pro Max</p>
      </Link>
      </Phone>
      <br></br>

    <Phone>
      <Link to="/iphone-x-reparatur-preise">
        <img src={`${pathToImg}x.jpg`} alt="" />
        <p>iPhone X</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-xr-reparatur-preise">
        <img src={`${pathToImg}x.jpg`} alt="" />
        <p>iPhone XR</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-xs-reparatur-preise">
        <img src={`${pathToImg}x.jpg`} alt="" />
        <p>iPhone XS</p>
      </Link>
      </Phone>
      <Phone>
        <Link to="/iphone-xs-plus-reparatur-preise">
          <img src={`${pathToImg}x.jpg`} alt="" />
          <p>iPhone XS Plus</p>
        </Link>
        </Phone>
    <br></br>

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
