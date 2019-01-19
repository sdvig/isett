
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

const pathToImg = '/assets/images/smartphones/xiaomi/'

export default () => (
  <div className="grid">
    <Head>
      <title>Xiaomi - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Xiaomi</PageHeader>

    <Phone>
      <Link to="/xiaomi-mi-5-reparatur-preise">
        <img src={`${pathToImg}mi-5.jpg`} alt="" />
        <p>Xiaomi MI 5</p>
      </Link>
    </Phone>
  </div>
)
