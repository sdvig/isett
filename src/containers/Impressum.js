
import React from 'react'
import styled from 'styled-components'
//

const PageHeader = styled.h1`
  font-weight: 300;
  margin-bottom: 2em;
`

export default () => (
  <div className="grid">
    <PageHeader>Impressum</PageHeader>
    <p>zugleich Anbieterkennung im Sinne von §§ 5 TMG, 55 RStV</p>
    <h4>Berlin iSett Handyreparatur</h4>
    <p>Frau Evelina Chayka<br />Uhlandstraße 28<br />10719 Berlin</p>
    <p>E-Mail: service@isett.de<br />Website: www.isett.de<br />Telefon: 030-88925666</p>
    <p>Verantwortlich für redaktionelle Inhalte gemäß RStV Frau Evelina Chayka</p>
    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz DE308375890</p>
    <p>Online-Streitbeilegung (B2C) Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten betreffend vertraglicher Verpflichtungen aus Online-Verträgen geschaffen (OS-Plattform). Sie können die OS-Plattform unter dem folgenden Link erreichen: http://ec.europa.eu/consumers/odr/</p>
    <p>Online-Streitbeilegung (B2C) Sie haben die Möglichkeit sich an eine Verbraucherschlichtungsstelle zu wenden. Die für uns zuständige Verbraucherschlichtungsstelle ist Allgemeine Verbraucherschlichtungsstelle des Zentrums für Schlichtung e. V.</p>
    <h4>Kontakt:</h4>
    <p>Straßburger Str. 8<br />77694 Kehl<br />Telefon: +49 7851 79579 40 Telefax: +49 7851 79579 41<br />Internet: www.verbraucher-schlichter.de E-Mail: mail@verbraucher-schlichter.de</p>
    <p>Diese Schlichtungsstelle ist eine „Allgemeine Verbraucherschlichtungsstelle“ nach § 4 Absatz 2 Satz 2 VSBG.</p>
    <p>Wir sind jedoch weder verpflichtet noch bereit an einem entsprechenden Streitbeilegungsverfahren teilzunehmen.</p>
  </div>
)
