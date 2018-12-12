import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import LogoImg from './logo.png'

const Header = styled.header`
  padding: 2em 0;
  background: #002434;

  nav {
    margin-top: .5em;
    width: 100%;
    white-space: nowrap;

    a {
      padding-right: 2rem;
      display: inline-block;
    }
  }

  .grid {
    display: flex;
  }
`

const Logo = styled.div`
  font-size: 0;
  flex: 100%;
  a {
    display: block;
    width: 248px;
    height: 30px;
    background-image: url(${LogoImg});
    background-size: 100%;
  }
`

export default () => (
  <Header>
    <div className="grid">
      <Logo>
        <Link exact to="/">Home</Link>
      </Logo>
      <nav>
        <Link to="/iphone_reparatur_preise">iPhone Preise</Link>
        <Link to="/andere">Andere Geräte Preise</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/unsere-filialen">Unsere Filialen</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </div>
  </Header>
)
