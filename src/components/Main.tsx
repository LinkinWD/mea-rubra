import React from 'react'


//images
import beag1 from '../assets/beag1.jpg'
import beag2 from '../assets/beag2.jpg'
import beag3 from '../assets/beag3.jpg'
import beag4 from '../assets/beag4.jpg'

type Props = {}

const Main = (props: Props) => {
  return (
    <section>
        <div className="container">
        <h2>Beagle</h2>
        <p><span className='lead fw-bold'>Beagle on todella monipuolinen rotu</span>, jonka kapasiteetti vaihtelee itsenäisestä metsästäjästä kainalokuopassa viihtyvään sohvaperunaan sekä omistajan hermojen koettelijasta taitavaan harrastuskaveriin.</p>
        <img src={beag1} className='fluid-image col-10'/>
        <p>Pienehköstä koosta ja suloisesta ulkonäöstään huolimatta beagle tarvitsee kunnollisen tapakasvatuksen. Se on yleensä hyvin älykäs ja erityisesti ruuan suhteen melkoinen opportunisti, joten se oppii nopeasti käyttämään omistajan heikkoja hetkiä hyväkseen ja jos et pidä varaasi, huomaat pian eläväsi tukevasti tassun alla. Toisaalta ahneus ja älykkyys mahdollistavat sen, että pystyt hyvinkin nopeasti kouluttamaan koiraasi halutuille tavoille, kun vaan keksit koirasi lempiasiat ja käytät näitä koirasi motivoimiseksi toimimaan oikein.</p>
        <img src={beag2} className='fluid-image col-10'/>
        <p>Beagle on kotioloissa hyvin mukavuudenhaluinen ja löytää varmasti kodin pehmeimmät ja lämpimimmät paikat. Ole varovainen, jos et halua koiraasi nukkumaan saman peiton alle kanssasi. Kun annat sille kerran luvan tulla sänkyyn, se kyllä ottaa paikkansa seuraavinakin öinä :) </p>
        <p>Beagle on yleensä taustastaan johtuen hyvin sosiaalinen rotu. Pääsääntöisesti kaikki ihmiset ja koirat ovat sille ystäviä, kunnes toisin todistetaan. Jos kotona asuu useampi koira, löydät ne yleensä nukkumasta lähekkäin. Jos beaglellasi ei ole muita koiria asuintovereina, se haluaa viettää aikansa sinun kanssasi ja mielellään lähellä.</p>
        <img src={beag3} className='fluid-image col-10'/>
        <p>Beagle on hyvin monipuolinen rotu, joka sopii moneen harrastukseen. Omistajan on toki muistettava, että kyseessä on itsenäinen metsästyskoira, jonka irtipito aitaamattomalla alueella voi olla mahdotonta. Mutta jos tämän rajoituksen hyväksyy, voit harrastaa koirasi kanssa melkein mitä tahansa. Kireä pipo kannattaa harrastuksissa jättää kotiin, koska kaikissa lajeissa et välttämättä yllä huipulle tämän rodun kanssa, mutta hauskaa harrastuksissa taatusti on.</p>
        <p>Omani käyvat jänismetsälläkin, mutta metsästysaika on rajallinen ja hyvin aktiivisena koirana beagle kaipaa toimintaa metsästyskauden ulkopuolellakin, muuten se saattaa järjestää toimintaa itse. Minun koirani lähinnä jäljestävät, rally-tokoilevat ja doboilevat. Lissu on koiristani poikkeuksellisen miellyttämisenhaluinen beagle, joten sen kanssa ollaan myös tahkottu leikkimielellä tottista. Jäljestäminen on yleensä beaglelle mieluisaa toimintaa, koska se on luontainen nenänkäyttäjä. Usein se ei tähän harrastukseen juuri opetusta tarvitse, mutta ohjaajan kannattaa käydä vähän opiskelemassa asiaa, jotta saatte koirasi kanssa harrastuksesta mahdollisimman paljon irti. Monet beaglet ovat myös hyviä agilityssa ja nauttivat siitä suuresti.</p>
        <img src={beag4} className='fluid-image col-10'/>
        <p>Kun beaglen seuran- ja toiminnantarve on tyydytetty ja sillä on selkeät säännöt ja rajat, se on oikein mukava ja rauhallinen lemmikki, joka pentuajan hölmöilyjen jälkeen harvoin enää tekee tihutöitä kotosalla. Ruokaa saattavat varastella tilaisuuden tullen, mutta kun omistaja muistaa koiransa pohjattoman ahneuden, tämäkin on helppo estää.</p>
        <p>Jos olet kiinnostunut beaglesta, suosittelen tutustumaan omistajiin ja kasvattajiin, heillä on aina muutama hulvaton tarina kerrottavana lemmikistään. </p>
        </div>
    </section>
  )
}

export default Main