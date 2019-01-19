
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

const pathToImg = '/assets/images/smartphones/oneplus/'

export default () => (
  <div className="grid">
    <Head>
      <title>One Plus - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>One Plus</PageHeader>

    <Phone>
      <Link to="/one-plus-5t">
        <img src={`${pathToImg}5t.jpg`} alt="" />
        <p>One Plus 5T</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/one-plus-x">
        <img src={`${pathToImg}x.jpg`} alt="" />
        <p>One Plus X</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/one-plus-3t">
        <img src={`${pathToImg}3t.jpg`} alt="" />
        <p>One Plus 3T</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/one-plus-three">
        <img src={`${pathToImg}three.jpg`} alt="" />
        <p>One Plus Three</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/one-plus-two">
        <img src={`${pathToImg}two.jpg`} alt="" />
        <p>One Plus Two</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/one-plus-one">
        <img src={`${pathToImg}one.jpg`} alt="" />
        <p>One Plus One</p>
      </Link>
    </Phone>
  </div>
)
