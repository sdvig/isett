
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
  margin-right: 5em;

  iframe {
    margin-top: 2em;
  }
`

export default () => (
  <div className="grid">
    <PageHeader>Unsere Filialen</PageHeader>
    <Filialen>
      <Filiale>
        <h4>Filiale Kurfürstendamm</h4>
        <p>Uhlandstraße 28, 10719 Berlin</p>
        <p>030 889 25 666</p>
        <p><a href="mailto:uhlande@isett.de">uhland@isett.de</a></p>
        <iframe
          title="Filiale Kurfürstendamm"
          width="100%"
          height="400px"
          id="mapcanvas"
          src="https://maps.google.com/maps?q=isett%20berlin&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </Filiale>
      
    </Filialen>
  </div>
)
