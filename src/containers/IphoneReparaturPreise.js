
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

export default () => (
  <div className="grid">
    <PageHeader>Iphone Reparatur Preise</PageHeader>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
    <Phone>
      <Link to="/iphone-8-reparatur-preise">
        <img src="http://isett.de/wp-content/uploads/2017/12/7.jpg" />
        <p>Iphone</p>
      </Link>
    </Phone>
  </div>
)
