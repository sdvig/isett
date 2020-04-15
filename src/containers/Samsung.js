
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

    <h2> S-Modelle </h2>

    <Phone>
      <Link to="/samsung-s10e">
        <img src={`${pathToImg}s10e.jpg`} alt="" />
        <p>Samsung Galaxy S10 E</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s10plus">
        <img src={`${pathToImg}s10e.jpg`} alt="" />
        <p>Samsung Galaxy S10 Plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s10">
        <img src={`${pathToImg}s10e.jpg`} alt="" />
        <p>Samsung Galaxy S10</p>
      </Link>
    </Phone>

    <br></br>

    <Phone>
      <Link to="/samsung-s9">
        <img src={`${pathToImg}s9.jpg`} alt="" />
        <p>Samsung Galaxy S9</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/samsung-s9Plus">
        <img src={`${pathToImg}s9.jpg`} alt="" />
        <p>Samsung Galaxy S10</p>
      </Link>
    </Phone>
<br></br>
    <Phone>
      <Link to="/samsung-s8-plus">
        <img src={`${pathToImg}s8.jpg`} alt="" />
        <p>Samsung Galaxy S8 plus</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/samsung-s8">
        <img src={`${pathToImg}s8.jpg`} alt="" />
        <p>Samsung Galaxy S8</p>
      </Link>
    </Phone>
    <br></br>

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

      <More>Weitere Modelle auf Anfrage</More>

    <br></br>
    <h2> A - Modelle </h2>
    <br></br>

    <Phone>
      <Link to="/samsung-a90">
        <img src={`${pathToImg}a90.jpg`} alt="" />
        <p>Samsung Galaxy A90</p>
      </Link>
    </Phone>
      <Phone>
      <Link to="/samsung-a50">
        <img src={`${pathToImg}a50.jpg`} alt="" />
        <p>Samsung Galaxy A50</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/samsung-a40">
        <img src={`${pathToImg}a40.jpg`} alt="" />
        <p>Samsung Galaxy A40</p>
      </Link>
    </Phone>

      <More>Weitere Modelle auf Anfrage</More>
    <br></br>

  </div>
)
