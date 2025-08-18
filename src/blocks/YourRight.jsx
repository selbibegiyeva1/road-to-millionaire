import React from 'react';

// CSS
import "../styles/YourRight.css";

function YourRight() {
    return (
        <div className='YourRight'>
            <img src="/right/1.png" alt="image" className='shape s-1' />
            <img src="/right/2.png" alt="image" className='shape s-2' />
            <img src="/right/3.png" alt="image" className='shape s-3' />
            <div className="right-text">
                <p className="right-head">It’s your right</p>
                <p className="right-desc">The right not just to dream bigger, but to have a precise plan to achieve it. We’re here to make that right a reality.</p>
            </div>
        </div>
    )
}

export default YourRight