
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

const pathToImg = '/assets/images/smartphones/zte/'

export default () => (
  <div className="grid">
    <Head>
      <title>ZTE - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>ZTE</PageHeader>

    <Phone>
      <Link to="/zte-blade-d6-reparatur-preise">
        <img src={`${pathToImg}d6.jpg`} alt="" />
        <p>ZTE Blade D6</p>
      </Link>
    </Phone>
  </div>
)
