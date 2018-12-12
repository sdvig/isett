
import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
//

const PageHeader = styled.h1`
  font-weight: 300;
  margin-bottom: 2em;
`
const Filialen = styled.div`
  display: flex;
`
const Filiale = styled.div`
  flex: 1;

`
const Answer = styled.div`

`

export default () => (
  <div className="grid">
    <PageHeader>Unsere Filialen</PageHeader>
    <Filialen>
      <Filiale>
        <h4>Filiale Kurfürstendamm</h4>
        <p>Uhlandstraße 28, 10719 Berlin</p>
        <p>030 889 25 666</p>
        <p><a href="mailto:service@isett.de">service@isett.de</a></p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.7622640841832!2d13.322498916074037!3d52.501542879810586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850fba4d7271d%3A0xec4f7aa5b8966a3b!2siSett-Handyreparatur!5e0!3m2!1sde!2sde!4v1484069506606"
          width="500"
          height="450"
          frameborder="0"
          style={{border:0}}
          allowfullscreen
        ></iframe>
      </Filiale>
      <Filiale>
        <h4>Filiale Prenzlauer Berg</h4>
        <p>Schönhauser Allee 48, 10437 Berlin</p>
        <p>030 443 57 770</p>
        <p><a href="mailto:service@isett.de">service@isett.de</a></p>
        <iframe
          width="500"
          height="450"
          frameborder="0"
          style={{border:0}}
          src="https://www.google.com/maps/embed/v1/place?q=isett%20sch%C3%B6nhauser&key=AIzaSyAWPzyIFypHHabG3UKZKqS1B7R7jQiVyIM"
          allowfullscreen
        >
        </iframe>
      </Filiale>
    </Filialen>
  </div>
)
