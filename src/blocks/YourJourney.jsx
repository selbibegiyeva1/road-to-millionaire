import React from 'react';

// CSS
import "../styles/YourJourney.css";

function YourJourney() {
    return (
        <div className='YourJourney'>
            <div className='journey-text'>
                <p className="right-head journey">Your journey starts here</p>
                <p className="right-desc journey">Be the first to implement your AI-powered strategy. No spam, just an invitation to a new future.</p>
                <a href="#" className='wait herowait'>Join to Wait List</a>
            </div>
            <img src="/journey.png" alt="image" />
        </div>
    )
}

export default YourJourney