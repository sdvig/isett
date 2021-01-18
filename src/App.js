import React, { Component } from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Analytics from './Analytics'
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
  @media (max-width: 700px) {
    #root {
      overflow-x: hidden;
      position: relative;
    }
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
    padding: 0 2em;
  }
  .content .grid {
    padding: 3em 0 6em 0;
    @media (max-width: 700px) {
      padding: 3em 2em 6em 2em;
    }
  }
  footer {
    background: #434647;
    padding: 2em 0;
    section {
      @media (min-width: 700px) {
        display: flex;
        div {
          flex: 1;
        }
      }
    }
    nav {
      text-align: center;
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
      color: #fff;
    }
  }
  .footer-bottom {
    border-top: 1px solid #7E7E7E;
    padding: 1em 0;
    .grid {
      @media (min-width: 700px) { display: flex; }
    }
    nav a {
      margin-right: 1em;
    }
  }
  .copy {
    font-size: 15px;
    text-align: center;
    margin-top: 1.5em;
    @media (min-width: 700px) {
      flex: 1;
      text-align: right;
      margin-top: 0;
    }
  }
`

class App extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      // browser-only code
      document.addEventListener('DOMContentLoaded', () => {
        window.cookieconsent.run({
          notice_banner_type: 'headline',
          consent_type: 'express',
          palette: 'dark',
          language: 'de',
          website_name: 'www.isett.de',
          cookies_policy_url: 'https://isett.de/datenschutz',
        })
      })
    }
  }

  render () {
    return (
      <Router>
        <Analytics id="UA-85012381-1">
          <AppStyles>
            <Header />
            <div className="content">
              <Routes />
            </div>
            <div className="cituroContainer" />
            <footer>
              <div className="grid">
                <section>
                  <div className="filials">

                    <h2>Wir arbeiten mobile!</h2>
                    <p>Bitte buchen Sie hier rechts <a href="https://app.cituro.com/booking/isett" target="_blank" rel="noopener noreferrer">einen Termin</a><br /> Wir holen Ihr Gerät kontaktlos ab!<br />Reparaturen wie gewöhnt in 30 Min.</p>
                  </div>
                  <div className="hours">
                    <h2>Öffnungszeiten</h2>
                    <p>Mo-Fr: 10:30 - 21.00<br />Sa: 11:00 - 21:00<br />+ nach Vereinbarung</p>
                  </div>
                  <div className="socialnetworks">
                    <h2>Social Networks</h2>
                    <p>
                      <a href="https://www.facebook.com/isetthandyreparatur/" target="_blank" rel="noopener noreferrer">Facebook</a><br />
                      <a href="https://www.instagram.com/isett_handyreparatur/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
                      <a href="https://local.google.com/place?id=17027963568296192571&use=srp&ibp=gwp;0,7" target="_blank" rel="noopener noreferrer">Google Bewertungen</a>
                    </p>
                  </div>
                </section>
              </div>
              <p className="note">Alle Preise inkl. 19% MwSt, zzgl. Versand</p>
              <div className="footer-bottom">
                <div className="grid">
                  <nav>
                    <Link to="/impressum">Impressum</Link>
                    <Link to="/agb">AGB</Link>
                    <Link to="/datenschutz">Datenschutz</Link>
                    <Link to="/versand">Versand</Link>
                  </nav>
                  <div className="copy">© 2016 - 2021 iSett inh. Evelina Chayka. All Rights Reserved.</div>
                </div>
              </div>
            </footer>
          </AppStyles>
        </Analytics>
      </Router>
    )
  }
}

export default hot(module)(App)
