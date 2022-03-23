import React from 'react'
import Banner from '../components/accueil/banner'
import '../assets/styles/index.css'
import Latest from '../components/accueil/latest'
import Shortcut from '../components/accueil/shortcut'
import Promo from '../components/accueil/promo'
import AdvantageUser from '../components/accueil/advantage'


export default function Accueil() {
    return (
        <div>
            <Banner />
            <Latest />
            <Shortcut />
            <Promo />
            <AdvantageUser />

        </div>
    )
}
