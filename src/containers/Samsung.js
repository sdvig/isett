
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

const pathToImg = '/assets/images/smartphones/samsung/'

export default () => (
  <div className="grid">
    <Head>
      <title>Samsung Reparatur Preise - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Samsung Reparatur Preise</PageHeader>

    <Phone>
      <Link to="/samsung-s8-plus">
        <img src={`${pathToImg}s8-plus.jpg`} alt="" />
        <p>Samsung Galaxy S8 plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s8">
        <img src={`${pathToImg}s8.jpg`} alt="" />
        <p>Samsung Galaxy S8</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s6-edge-plus">
        <img src={`${pathToImg}s6-edge-plus.jpg`} alt="" />
        <p>Samsung Galaxy S6 edge plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s7-edge">
        <img src={`${pathToImg}s7-edge.jpg`} alt="" />
        <p>Samsung Galaxy S7 edge</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/samsung-s7">
        <img src={`${pathToImg}s7.jpg`} alt="" />
        <p>Samsung Galaxy S7</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s6-edge">
        <img src={`${pathToImg}s6.jpg`} alt="" />
        <p>Samsung Galaxy S6 edge</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s6">
        <img src={`${pathToImg}s6.jpg`} alt="" />
        <p>Samsung Galaxy S6</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s5-reparatur-preise">
        <img src={`${pathToImg}`} alt="" />
        <p>Samsung Galaxy S5</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="#">
        <img src={`${pathToImg}`} alt="" />
        <p>Samsung Galaxy S4</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-note-8">
        <img src={`${pathToImg}note-8.jpg`} alt="" />
        <p>Samsung Galaxy Note 8</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-a7-2017">
        <img src={`${pathToImg}a7-2017.jpg`} alt="" />
        <p>Samsung Galaxy A7 (2017)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-a7">
        <img src={`${pathToImg}a7.jpg`} alt="" />
        <p>Samsung Galaxy A7</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/samsung-a5-2017">
        <img src={`${pathToImg}a5-2017.jpg`} alt="" />
        <p>Samsung Galaxy A5 (2017)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-a5-2016">
        <img src={`${pathToImg}a5-2016.jpg`} alt="" />
        <p>Samsung Galaxy A5 (2016)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-a5">
        <img src={`${pathToImg}a5.jpg`} alt="" />
        <p>Samsung Galaxy A5</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-a3-2017">
        <img src={`${pathToImg}a3-2017.jpg`} alt="" />
        <p>Samsung Galaxy A3 (2017)</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/samsung-a3-2016">
        <img src={`${pathToImg}a3-2016.jpg`} alt="" />
        <p>Samsung Galaxy A3 (2016)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-a3-2015">
        <img src={`${pathToImg}a3-2015.jpg`} alt="" />
        <p>Samsung Galaxy A3 (2015)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-j7-2017">
        <img src={`${pathToImg}j7-2017.jpg`} alt="" />
        <p>Samsung Galaxy J7 (2017)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-j7-2016">
        <img src={`${pathToImg}j7-2017.jpg`} alt="" />
        <p>Samsung Galaxy J7 (2016)</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/samsung-j5-2015">
        <img src={`${pathToImg}j5-2015.jpg`} alt="" />
        <p>Samsung Galaxy J5 (2015)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-j3-2017">
        <img src={`${pathToImg}j3-2017.jpg`} alt="" />
        <p>Samsung Galaxy J3 (2017)</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-j3-2016">
        <img src={`${pathToImg}j3-2016.jpg`} alt="" />
        <p>Samsung Galaxy J3 (2016)</p>
      </Link>
    </Phone>
    <More>Weitere Modelle auf Anfrage</More>
  </div>
)
