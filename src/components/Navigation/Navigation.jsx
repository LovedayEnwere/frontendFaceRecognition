import React from 'react';
import './Navigation.css';

const Navigation =({onRouteChange, isSignedIn})=>{
    return(
        isSignedIn===true?
        <nav>
           <p className='navbar' onClick={()=>onRouteChange('signout')}>Sign Out</p>
        </nav>:
        <nav>
            <p className='navbar' onClick={()=>onRouteChange('signin')}>Sign In</p>
            <p className='navbar' onClick={()=>onRouteChange('register')}>Register</p>
        </nav>
    );
}

export default Navigation;