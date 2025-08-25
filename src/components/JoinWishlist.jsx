import React from 'react';

// CSS
import "../styles/JoinWishlist.css";

import { MdOutlineCancel } from "react-icons/md";

import { MdKeyboardArrowDown } from "react-icons/md";

function JoinWishlist({ effect, click }) {
    return (
        <div className={effect ? "JoinWishlist show" : "JoinWishlist"} data-lenis-prevent>
            <button className='close' onClick={click}>
                <i><MdOutlineCancel /></i>
            </button>
            <form className={effect ? "popForm" : ""}> 
                <center>
                    <div className="logo">
                        <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.0641 18.9474V24H11.9359V18.9474H37.0641ZM43.9744 12C43.9744 8.16307 40.8805 5.05263 37.0641 5.05263H11.9359C8.11947 5.05263 5.02564 8.16307 5.02564 12C5.02564 15.8369 8.11947 18.9474 11.9359 18.9474V24C5.34388 24 0 18.6274 0 12C0 5.37258 5.34388 1.01725e-08 11.9359 0H37.0641L37.6788 0.0160362C43.9851 0.33769 49 5.57986 49 12C49 18.4201 43.9851 23.6623 37.6788 23.984L37.0641 24V18.9474C40.8805 18.9474 43.9744 15.8369 43.9744 12Z" fill="white" />
                        </svg>
                        <p>Road To Millionaire</p>
                    </div>
                </center>
                <center><p className="form-head">Join to <span>Waitlist</span></p></center>
                <center>
                    <p className='form-desc'>Be the first to experience our new product! <br />- Early access to exclusive beta testing <br />- Almost free for our first participants</p>
                </center>
                <br /><br />
                <div className='formInput'>
                    <span>Name</span>
                    <input type="text" placeholder='Write your name' required />
                </div>
                <br />
                <div className='formInput'>
                    <span>Email</span>
                    <input type="email" placeholder='Write your email' required />
                </div>
                <br />
                <div className='formInput'>
                    <span>Country</span>
                    <div>
                        <select required>
                            <option>Turkmenistan</option>
                            <option>Uzbekistan</option>
                            <option>Russia</option>
                        </select>
                        <i><MdKeyboardArrowDown /></i>
                    </div>
                </div>
                <br />
                <div className='formInput'>
                    <span>Where did you hear about us?</span>
                    <div>
                        <select required>
                            <option>Instagram</option>
                            <option>LinkedIn</option>
                            <option>X (formerly Twitter)</option>
                        </select>
                        <i><MdKeyboardArrowDown /></i>
                    </div>
                </div>
                <br />
                <button>Join now</button>
                <br /><br /><br />
                <center>
                    <span className='terms'>By continuing, you acknowledge that you have read and agree to Chronicle's <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</span>
                </center>
            </form>
        </div>
    )
}

export default JoinWishlist