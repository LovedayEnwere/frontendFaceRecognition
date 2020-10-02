import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm=({onInputChange, onButtonSubmit})=>{
    return(
        <div>
                Facial recognition, give it a try
            <div className='center'>
                <div className='contain center'>
                    <input className='input-field' type="text" onChange={onInputChange} />
                <button className='button-link' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;