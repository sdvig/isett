
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

const pathToImg = '/assets/images/smartphones/huawei/'

export default () => (
  <div className="grid">
    <Head>
      <title>Huawei Reparatur Preise - iSett Handyreparatur Berlin</title>
    </Head>
    <PageHeader>Huawei Reparatur Preise</PageHeader>

    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}mate-8.jpg`} alt="" />
        <p>Huawei Mate 8</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-10">
        <img src={`${pathToImg}mate-10.jpg`} alt="" />
        <p>Huawei Mate 10</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-10-lite">
        <img src={`${pathToImg}mate-10-lite.jpg`} alt="" />
        <p>Huawei Mate 10 Lite</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-nova">
        <img src={`${pathToImg}nova.jpg`} alt="" />
        <p>Huawei Nova</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/huawei-nova-2">
        <img src={`${pathToImg}nova-2.jpg`} alt="" />
        <p>Huawei Nova 2</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-p8-lite">
        <img src={`${pathToImg}p8-lite.jpg`} alt="" />
        <p>Huawei P8 Lite</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-p8">
        <img src={`${pathToImg}p8.jpg`} alt="" />
        <p>Huawei P8</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-p9-lite">
        <img src={`${pathToImg}p9-lite.jpg`} alt="" />
        <p>Huawei P9 Lite</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}p9.jpg`} alt="" />
        <p>Huawei P9</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}p10.jpg`} alt="" />
        <p>Huawei P10</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}honor-8-lite.jpg`} alt="" />
        <p>Huawei Honor 8 Lite</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}p10-lite.jpg`} alt="" />
        <p>Huawei P10 Lite</p>
      </Link>
    </Phone>

    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}mate-9.jpg`} alt="" />
        <p>Huawei Mate 9</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}p8-lite-2017.jpg`} alt="" />
        <p>Huawei P8 Lite 2017</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}p9-lite-2017.jpg`} alt="" />
        <p>Huawei P9 Lite 2017</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/huawei-mate-8">
        <img src={`${pathToImg}p10-plus.jpg`} alt="" />
        <p>Huawei P10 plus</p>
      </Link>
    </Phone>
  </div>
)
