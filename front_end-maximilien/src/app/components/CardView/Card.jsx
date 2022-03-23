import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import "../../assets/styles/CardView.css";
const Card = () => {
    return (
        <>
            <h2 className="titlepage">CARTE CADEAU</h2>
            <div className='cartcadglob'>
                <div className='parthautcard'>
                    <img src="/src/app/assets/images/logo.png" className='logocart'/>
                    <p>Offrez une carte cadeau ou payez vos articles directement depuis votre compte utilisateur</p>
                </div>
                <div className='infocart'>
                    <p>Carte cadeau: ID CARTE</p>
                    <p>Solde actuel: x euro</p>
                </div>
                <p className='selectcard'>Sélectionner le montant de votre carte (de 10e à 150e):</p>
               
                <form className='selectprixcard'>
                    <label className='casecard' id="10">
                        <input className='dispcard' name="montant" type="radio"/>
                            <span>10</span>
                    </label>
                    <label className='casecard' >
                        <input className='dispcard' name="montant" type="radio" id="20"/>
                            <span>20</span>
                    </label>
                    <label className='casecard' >
                        <input className='dispcard' name="montant" type="radio" id="30"/>
                            <span>30</span>
                    </label>
                    <label className='casecard' >
                        <input className='dispcard' name="montant" type="radio" id="50"/>
                            <span>50</span>
                    </label>
                    <label className='casecard' >
                        <input className='dispcard' name="montant" type="radio" id="100"/>
                            <span>100</span>
                    </label>
                    <label className='casecard' >
                        <input className='dispcard' name="montant" type="radio" id="150"/>
                            <span>150</span>
                    </label>
                </form>
                <button className="panier_card">
                    Ajouter au panier <BsFillCartFill />
                </button>

            </div>
        </>
    );
};

export default Card;