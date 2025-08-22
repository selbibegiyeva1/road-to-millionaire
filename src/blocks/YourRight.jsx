import React from 'react';

// CSS
import "../styles/YourRight.css";

function YourRight() {
    return (
        <div className='YourRight'>
            <div className="pulse" aria-hidden="true">
                <span className="ring r1" />
                <span className="ring r2" />
                <span className="ring r3" />
            </div>
            <div className="right-text">
                <p className="right-head">It’s your right</p>
                <p className="right-desc">The right not just to dream bigger, but to have a precise plan to achieve it. We’re here to make that right a reality.</p>
            </div>
        </div>
    )
}

export default YourRight