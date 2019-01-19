
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

const pathToImg = '/assets/images/smartphones/nokia/'

export default () => (
  <div className="grid">
    <Head>
      <title>Nokia - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Nokia</PageHeader>

    <Phone>
      <Link to="/nokia-3-reparatur-preise">
        <img src={`${pathToImg}3.jpg`} alt="" />
        <p>Nokia 3</p>
      </Link>
    </Phone>
  </div>
)
