import React from 'react';

import Navbar from './Navbar';

// CSS
import "../styles/Sidebar.css";

import { RxCross2 } from "react-icons/rx";

function Sidebar({ sidebar, show, click }) {
    return (
        <div className={show ? "Sidebar show" : "Sidebar"}>
            <div>
                <header>
                    <a href="#" className="logo">
                        <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.0641 18.9474V24H11.9359V18.9474H37.0641ZM43.9744 12C43.9744 8.16307 40.8805 5.05263 37.0641 5.05263H11.9359C8.11947 5.05263 5.02564 8.16307 5.02564 12C5.02564 15.8369 8.11947 18.9474 11.9359 18.9474V24C5.34388 24 0 18.6274 0 12C0 5.37258 5.34388 1.01725e-08 11.9359 0H37.0641L37.6788 0.0160362C43.9851 0.33769 49 5.57986 49 12C49 18.4201 43.9851 23.6623 37.6788 23.984L37.0641 24V18.9474C40.8805 18.9474 43.9744 15.8369 43.9744 12Z" fill="white" />
                        </svg>
                        <p>Road To Millionaire</p>
                    </a>
                    <button className='close-toggle' onClick={sidebar}><i><RxCross2 /></i></button>
                </header>
                <br />
                <div className="sub-head sidebar-sub">
                    <span>The first AI to make you millionaire</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1C7 4.31371 4.31371 7 1 7C4.31371 7 7 9.68629 7 13C7 9.68629 9.68629 7 13 7C9.68629 7 7 4.31371 7 1Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C13.3807 14.5 14.5 15.6193 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C15.6193 14.5 14.5 13.3807 14.5 12Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <br /><br />
                <ul>
                    <li><a href="#problem" onClick={sidebar}>Problem</a></li>
                    <li><a href="#solution" onClick={sidebar}>Solution</a></li>
                    <li><a href="#howitworks" onClick={sidebar}>How it works</a></li>
                    <li><a href="#" onClick={sidebar}>FAQ</a></li>
                </ul>
            </div>

            <div className="side-btns">
                <button onClick={click}>Join to Wait List</button>
            </div>
        </div>
    )
}

export default Sidebar