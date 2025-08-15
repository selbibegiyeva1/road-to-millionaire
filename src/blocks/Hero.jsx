import React from 'react';

// CSS
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className='heroBlock'>
        <div className='heroText'>
          <div className="sub-head">
            <span>The first AI to make you millionaire</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1C7 4.31371 4.31371 7 1 7C4.31371 7 7 9.68629 7 13C7 9.68629 9.68629 7 13 7C9.68629 7 7 4.31371 7 1Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C13.3807 14.5 14.5 15.6193 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C15.6193 14.5 14.5 13.3807 14.5 12Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <p className="heading">Stop working hard - it's time to work smart</p>
          <p className="desc">Our AI platform builds a personalized strategy with daily tasks to lead you to $1,000,000.</p>
          <a href="#" className='wait herowait'>Join to Wait List</a>
        </div>
        <div className='heroImg'></div>
      </div>
    </div>
  )
}

export default Hero