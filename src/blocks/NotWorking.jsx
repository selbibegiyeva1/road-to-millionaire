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
            <center>
                <div className="not-working-block">
                    <div className='not-work-head'>
                        <p>It’s not working</p>
                    </div>
                    <div className="not-work-point point-one">
                        <span>Wait for the perfect moment and a genius idea</span>
                    </div>
                    <div className="not-work-point point-two">
                        <span>Skip the latte, save $5 a day, and you’ll be a millionaire </span>
                    </div>
                    <div className="not-work-point point-three">
                        <span>Drop out of school and you’ll be the next billionaire</span>
                    </div>
                    <div className="not-work-point point-four">
                        <span>Just work hard and the money will come</span>
                    </div>
                    <div className="not-work-point point-five">
                        <span>Rack up as many degrees as possible and a high salary is guaranteed</span>
                    </div>
                    <div className="not-work-point point-six">
                        <span>Focus on your dream, and the Universe will attune itself to your success</span>
                    </div>
                </div>
            </center>
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