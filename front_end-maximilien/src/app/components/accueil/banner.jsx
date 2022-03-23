import React from 'react'
import Rambo from '../../assets/images/FIRSTBLOOD.jpg'

export default function Banner() {
    return (

        <div className='try w-4/5 flex flex-col items-center'>
            <img src={Rambo} className='homeMedia' />
            <div className="viewmore2"><a href="">Voir plus</a></div>
            
        </div>

    )
}
