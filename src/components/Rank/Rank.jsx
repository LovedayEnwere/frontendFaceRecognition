import React from 'react';
import './Rank.css';

const Rank=({name,entries})=>{
    return(
    <div>
        <div className='name'>
            {`${name}, your entry count is...`}
        </div>
        <div className='rank'>
            {entries}
        </div>
    </div>
    );
}

export default Rank;