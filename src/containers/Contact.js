
import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
//

const PageHeader = styled.h1`
  font-weight: 300;
  margin-bottom: 2em;
`
const Questions = styled.div`
  max-width: 50em;
  .more {
    margin-top: 5em;
  }
`
const Question = styled.h4`

`
const Answer = styled.div`

`

export default () => (
  <div className="grid">
    <PageHeader>Kontakt</PageHeader>
    <p>Wir freuen uns auf Ihre Anfragen!</p>
    <h4></h4>
    <h4>Per Telefon</h4><p>030 889 25 666 </p>
    <h4>Per WhatsApp</h4><p> +4917664352077</p>
    <h4>Per Mail:</h4>
    <p><a href="mailto:service@isett.de">service@isett.de</a></p>
    <h4>Social Network:</h4>
    <p> <a href="https://www.facebook.com/isetthandyreparatur/">Facebook:</a> isetthandyreparatur </p>
    <p><a href="https://www.instagram.com/isett_handyreparatur/">Instagram:</a> isett_handyreparatur</p>

  </div>

)
