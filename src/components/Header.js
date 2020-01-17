import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import LogoImg from './logo.png'

const Header = styled.header`
  padding: 2em 0;
  background: #002434;

  nav {
    flex: 1;;
    @media (min-width: 700px) {
      text-align: right;
    }
    a {
      @media (min-width: 700px) {
        padding-right: 2rem;
        display: inline-block;
      }
    }


    .menuToggle {
      display: block;
      @media (max-width: 700px) {
        position: absolute;
        top: 2em;
        right: 2em;

        z-index: 1;

        -webkit-user-select: none;
        user-select: none;
      }
    }

    .menuToggle input
    {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;

      cursor: pointer;

      opacity: 0; /* hide this */
      z-index: 2; /* and place it over the hamburger */

      -webkit-touch-callout: none;
    }

    /*
     * Just a quick hamburger
     */
    @media (max-width: 700px) {
      .menuToggle span {

        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;

        background: #fff;
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
      }

      .menuToggle span:first-child { transform-origin: 0% 0%; }

      .menuToggle span:nth-last-child(2) { transform-origin: 0% 100%; }

      /*
       * Transform all the slices of hamburger
       * into a crossmark.
       */
      .menuToggle input:checked ~ span
      {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #002434;
      }

      /*
       * But let's hide the middle one.
       */
      .menuToggle input:checked ~ span:nth-last-child(3)
      {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      /*
       * Ohyeah and the last one should go the other direction
       */
      .menuToggle input:checked ~ span:nth-last-child(2)
      {
        transform: rotate(-45deg) translate(0, -1px);
      }
    }
    /*
     * Make this absolute positioned
     * at the top left of the screen
     */
    .menu {
      list-style-type: none;
      @media (max-width: 700px) {
        position: absolute;
        width: 300px;
        margin: -100px 0 0 0;
        padding: 50px;
        padding-top: 125px;
        right: -100px;

        background: #fff;
        opacity: .95;

        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */

        transform-origin: 0% 0%;
        transform: translate(100%, 0);

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      }
    }

    .menu li {
      @media (max-width: 700px) {
        padding: 10px 0;
        font-size: 22px;
      }
    }

    /*
     * And let's slide it in from the left
     */
    .menuToggle input:checked ~ ul
    {
      transform: none;
    }

  }

  .grid {
    display: flex;
  }
`

const Logo = styled.div`
  font-size: 0;
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
        <div className="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul className="menu">
            <Link to="/iphone_reparatur_preise"><li>iPhone Preise</li></Link>
            <Link to="/andere"><li>Andere Geräte Preise</li></Link>
            <Link to="/kontakt"><li>Kontakt</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  </Header>
)
