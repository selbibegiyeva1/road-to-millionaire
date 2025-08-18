import React from 'react';

// CSS
import "../styles/YourJourney.css";

function YourJourney({ click }) {
    return (
        <div className='YourJourney'>
            <div className='journey-text'>
                <p className="right-head journey">Your journey starts here</p>
                <p className="right-desc journey">Be the first to implement your AI-powered strategy. No spam, just an invitation to a new future.</p>
                <button className='wait herowait' onClick={click}>Join to Wait List</button>
            </div>
            <img src="/journey.png" alt="image" />
        </div>
    )
}

export default YourJourney