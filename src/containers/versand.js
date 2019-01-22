
import React from 'react'
import styled from 'styled-components'
//

const PageHeader = styled.h1`
  font-weight: 300;
  margin-bottom: 2em;
`

export default () => (
  <div className="grid">
    <PageHeader>Versand</PageHeader>
    <h4>Alle Geräte können per Post an- bzw. zurückgeschickt werden.</h4>
    <h5>Versandkosten</h5>
    <p>Alle Geräte werden per DHL mit einer Trackingnummer versichert verschickt.</p>
  </div>
)
