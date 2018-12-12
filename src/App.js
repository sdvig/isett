import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Header from './components/Header'


injectGlobal`
  html {
    padding: 0;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Verdana', Arial, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    font-size: 16px;
    color: #626262;
    background: #fff;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #90c9d6;
  }

  img {
    max-width: 100%;
  }


  .grid {
    max-width: 1200px;
    margin: 0 auto;
  }
  .content .grid {
    padding: 3em 0 6em 0;
  }
  footer {
    background: #434647;
    padding: 2em 0;
    section {
      display: flex;
      div {
        flex: 1;
      }
    }
    nav {

    }
    .note {
      text-align: center;
      font-size: 13px;
      margin: 2em;
    }
    h3 {
      font-weight: 300;
      color: #fff;
    }
    p {
      line-height: 1.5em;
    }
  }
  .footer-bottom {
    border-top: 1px solid #7E7E7E;
    padding: 1em 0;
    .grid {
      display: flex;
    }
  }
  .copy {
    font-size: 15px;
    white-space: nowrap;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Header />
      <div className="content">
        <Routes />
      </div>
      <footer>
        <div className="grid">
          <section>
            <div className="filials">
              <h3>Filiale Kurfürstendamm</h3>
              <p>Uhlandstraße 28, 10719 Berlin<br />030 889 25 666</p>
            </div>
            <div className="tel">
              <h3>Filiale Prenzlauer Berg</h3>
              <p>Schönhauser Allee 48, 10437 Berlin<br />030 443 57 770</p>
            </div>
            <div className="hours">
              <h3>Öffnungszeiten</h3>
              <p>Mo-Fr: 10:00 - 19.00<br />Sa: 11:00 - 17:00</p>
            </div>
          </section>
        </div>
        <p className="note">Alle Preise inkl. 19% MwSt, zzgl. Versand</p>
        <div className="footer-bottom">
          <div className="grid">
            <nav>
              <Link to="/impressum">Impressum</Link>
              <Link to="/agb">AGB</Link>
              <Link to="/datenshutz">Datenshutz</Link>
            </nav>
            <div className="copy">© 2016 iSett. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
