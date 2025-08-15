import React from 'react';

// CSS
import "../styles/NotWorking.css";

function NotWorking() {
    return (
        <div className='NotWorking'>
            <center>
                <p className="working-head"><span>Stop playing a game</span> whose rules weren’t made for you!</p>
            </center>
            <center>
                <div className="grad-line"></div>
            </center>
            <center>
                <p className="working-head working-two">Throughout the 21st century we’ve been taught success from a single template:</p>
            </center>
            <br /><br /><br />
            <center>
                <p className="working-head working-two" id="work-grad" style={{ maxWidth: 565 }}>universal "secrets" advice from books other people's success stories</p>
            </center>
            <div className="not-working-block">
                <p>It’s not working</p>
            </div>
            <center>
                <div className="grad-line"></div>
            </center>
            <center>
                <p className="working-head working-two" style={{ maxWidth: 1050 }}><span>But that’s playing with someone else’s cards.</span> You’re trying to copy a path that ignores your unique mix of skills, experience, resources, and ambition.</p>
            </center>
            <center>
                <p className="working-head" id='bottom-head' style={{ maxWidth: 1200 }}>We <span>decided</span> to <span>change</span> that.</p>
            </center>
        </div>
    )
}

export default NotWorking