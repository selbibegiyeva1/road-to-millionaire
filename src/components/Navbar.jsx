import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className='Navbar'>
            <nav>

                {/* logo */}
                <div className="logo">
                    <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.0641 18.9474V24H11.9359V18.9474H37.0641ZM43.9744 12C43.9744 8.16307 40.8805 5.05263 37.0641 5.05263H11.9359C8.11947 5.05263 5.02564 8.16307 5.02564 12C5.02564 15.8369 8.11947 18.9474 11.9359 18.9474V24C5.34388 24 0 18.6274 0 12C0 5.37258 5.34388 1.01725e-08 11.9359 0H37.0641L37.6788 0.0160362C43.9851 0.33769 49 5.57986 49 12C49 18.4201 43.9851 23.6623 37.6788 23.984L37.0641 24V18.9474C40.8805 18.9474 43.9744 15.8369 43.9744 12Z" fill="white" />
                    </svg>
                    <p>Road To Millionaire</p>
                </div>

                {/* links */}
                <ul>
                    <li><a href="#">Problem</a></li>
                    <li><a href="#">Solution</a></li>
                    <li><a href="#">How it works</a></li>
                </ul>

                {/* right */}
                <div className="right" style={{zIndex: 2}}>
                    <span>EN</span>
                    <a href="#" className='wait'>Join to Wait List</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar