import React from 'react';
import picture from '../../images/logo.jpg'
import '../animations/animate.css'
import './Logo.css'

const Logo=()=>{
    return(
        <div>
            <img src={picture} alt='logo' className='logo' />
        </div>
    );
}

export default Logo;