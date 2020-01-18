
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
  border: 10px solid #FAFAFA;
  margin-bottom: 3em;
  a {
    display: block;
  }
  p {
    font-size: 13px;
  }
`

const pathToImg = '/assets/images/smartphones/'

export default () => (
  <div className="grid">
    <Head>
      <title>Smartphones Reparatur Preise - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Smartphones Reparatur Preise</PageHeader>
    <Phone>
      <Link to="/samsung">
        <img src={`${pathToImg}samsung.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/htc">
        <img src={`${pathToImg}htc.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei">
        <img src={`${pathToImg}huawei.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/google">
        <img src={`${pathToImg}google.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/xiaomi">
        <img src={`${pathToImg}xiaomi.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/nokia">
        <img src={`${pathToImg}nokia.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/zte">
        <img src={`${pathToImg}zte.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/one-plus">
        <img src={`${pathToImg}oneplus.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/blackberry">
        <img src={`${pathToImg}blackberry.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/sony">
        <img src={`${pathToImg}sony.jpg`} alt="" />
      </Link>
    </Phone>
    <Phone>
      <Link to="/lg">
        <img src={`${pathToImg}lg.jpg`} alt="" />
      </Link>
    </Phone>
  </div>
)
