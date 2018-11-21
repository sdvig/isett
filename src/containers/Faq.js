
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
    <PageHeader>FAQ</PageHeader>
    <Questions>
      <Question>Who are we?</Question>
      <Answer>We are a team of over 70 musicians, musicologists, and technologists working together in Berlin. We are honoured to work with renowned labels, musicians, orchestras, and festivals from around the world.</Answer>
      <Question>What can IDAGIO do that other music streaming services can't?</Question>
      <Answer>On IDAGIO classical music is structured and displayed in a clear, clean way. Orchestras, soloists, composers, conductors, and compositions: they all have their own pages for you to explore. You can build your own collection on your computer or mobile device, and then bring this collection with you. Whether you want to listen to playlists curated by acclaimed performers and critics, compare recordings of a work you are studying, or dive deep into an epoch or genre, IDAGIO lets you do it when you want, and as much as you want, for as little as €9.99 per month.</Answer>
      <Question>Is the app free?</Question>
      <Answer>IDAGIO is available from €9.99 per month. Your first 14 days are free, so you can find out why others prefer IDAGIO. You can cancel any time.</Answer>
      <p className="more">Sie haben weitere Fragen? <Link to="/kontakt">Kontaktieren Sie uns</Link></p>
    </Questions>
  </div>
)
