
import React from 'react'
import { withRouteData, Head } from 'react-static'
import convert from 'htmr'
import styled from 'styled-components'
//

const PageHeader = styled.h1`
  font-weight: 300;
  margin-bottom: 2em;
`

const PhonePage = styled.div`
  .text {
    display: inline-block;
    margin-left: 5em;
    vertical-align: top;
    font-size: .825em;
    line-height: 1.75em;
    ul {
      padding-left: .25em;
    }
  }
  img {
    margin-top: 1em;
  }
  .note {
    color: #AAA;
    font-size: .825em;
    margin-top: 2em;
  }
`

const pathToImg = '/assets/images/phones/'

export default withRouteData(({ data }) => (
  <PhonePage>
    <Head>
      <title>{data.title} - iSett Handyreparatur Berlin</title>
    </Head>
    <div className="grid">
      <PageHeader>{data.title}</PageHeader>
      <img src={`${pathToImg}${data.img}`} alt="" />
      <div className="text">
        { convert(data.contents) }
        <p className="note">Alle Preise inkl. 19% MwSt, zzgl. Versand</p>
      </div>
    </div>
  </PhonePage>
))
