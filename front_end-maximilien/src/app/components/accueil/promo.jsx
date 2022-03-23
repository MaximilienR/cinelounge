import React from 'react'
import Squid from '../../assets/images/Squid.jpg'
import Lagertha from '../../assets/images/lagertha.jpg'
import Pull from '../../assets/images/pull.jpg'
import Shirt from '../../assets/images/shirt.jpg'
import Vector from '../../assets/images/Vector.png'
import Panier2 from "../../assets/images/panier2.png";

export default function Promo() {
    return (
        <div className='backgrpromo'>

            <h1 className='promo text-center mt-5 text-2xl'>NOS PROMOTIONS</h1>
            <div className='flex flex-wrap place-content-evenly text-center mt-5'>
                <div className='decal'>
                    <img src={Squid} className='tourimgprom' />
                    <div className='bloquage_nom bg-blanc-custom mt-2'>
                        <p className='centre'>Mug Squid Game</p>
                        <div className='promoflex'>
                            <ul>
                                <li><img src={Vector}/></li>
                                <li><p className='affichage_prix'>90€</p></li>
                                <li><img className="panier2" src={Panier2} href=""/></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className='decal'>
                    <img src={Lagertha} className='tourimgprom '/>
                    <div className='bloquage_nom bg-blanc-custom mt-2'>
                        <p className='centre'>Figurine Laguerta</p>
                        <div className='promoflex'>
                            <ul>
                                <li><img src={Vector}/></li>
                                <li><p className='affichage_prix'>90€</p></li>
                                <li><img className="panier2" src={Panier2} href=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='decal'>
                    <img src={Pull} className='tourimgprom' />
                    <div className='bloquage_nom bg-blanc-custom mt-2'>
                        <p className='centre'>Pull 001</p>
                        <div className='promoflex'>
                            <ul>
                                <li><img src={Vector}/></li>
                                <li><p className='affichage_prix'>90€</p></li>
                                <li><img className="panier2" src={Panier2} href=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='decal'>
                    <img src={Shirt} className='tourimgprom' />
                    <div className='bloquage_nom bg-blanc-custom mt-2'>
                        <p className='centre'>T-shirt Captain America</p>
                        <div className='promoflex'>
                            <ul>
                                <li><img src={Vector}/></li>
                                <li><p className='affichage_prix'>90€</p></li>
                                <li><img className="panier2" src={Panier2} href=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
