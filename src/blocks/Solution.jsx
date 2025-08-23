import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// CSS
import "../styles/Solution.css";

function Solution() {
    return (
        <div className='Solution' id='solution'>
            <div className="solutionBlock">
                <p className="blockSub">Our Solution</p>
                <p className="blockHead solutionHead">Now You Play by Your Own Rules</p>
                <div className="solutionGrid">
                    <div data-aos="fade-up">
                        <p>We created an AI agent that sees opportunities invisible to the human eye</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p>By analyzing your data, it models dozens of possible scenarios and selects the optimal one</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p>It turns that scenario into a clear, precise <span>roadmap to your first million dollars</span></p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p>It forecasts current industry trends and suggests solutions where others see nothing</p>
                    </div> 
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p>This roadmap unfolds into concrete, personalized tasks you can start right away</p>
                    </div>
                </div>
            </div>
            <center>
                <div className="grad-line" data-aos="fade-down" data-aos-delay="250"></div>
            </center>
            <div className="solutionGrid2">
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="99" height="99" rx="23.5" fill="url(#paint0_linear_1295_91)" />
                        <rect x="0.5" y="0.5" width="99" height="99" rx="23.5" stroke="url(#paint1_linear_1295_91)" />
                        <path d="M50 23C64.9117 23 77 35.0883 77 50C77 64.9117 64.9117 77 50 77C35.0883 77 23 64.9117 23 50C23 35.0883 35.0883 23 50 23ZM50 42.7754C49.5069 42.7754 49.0334 42.9573 48.6689 43.2822L48.5195 43.4297L39.8105 53.0107C39.0678 53.828 39.1273 55.093 39.9443 55.8359C40.7615 56.5786 42.0265 56.5181 42.7695 55.7012L49.999 47.748L57.2295 55.7012C57.9725 56.5181 59.2375 56.5786 60.0547 55.8359C60.8208 55.1395 60.9216 53.9841 60.3193 53.1689L60.1895 53.0107L51.4795 43.4297C51.1005 43.013 50.5633 42.7755 50 42.7754Z" fill="url(#paint2_linear_1295_91)" />
                        <defs>
                            <linearGradient id="paint0_linear_1295_91" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#262626" />
                                <stop offset="1" stop-color="#121212" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1295_91" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3F3F3F" />
                                <stop offset="1" stop-color="#121212" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1295_91" x1="23" y1="50" x2="77" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>Suggests<br /> <span>non-obvious moves</span> that get you to your goal faster</p>
                </div>
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="99" height="99" rx="23.5" fill="url(#paint0_linear_1295_96)" />
                        <rect x="0.5" y="0.5" width="99" height="99" rx="23.5" stroke="url(#paint1_linear_1295_96)" />
                        <path d="M34.25 42.25C36.4591 42.25 38.25 44.0409 38.25 46.25V70C38.25 72.2091 36.4591 74 34.25 74H30C27.7909 74 26 72.2091 26 70V46.25C26 44.0409 27.7909 42.25 30 42.25H34.25ZM69.999 42.25C72.2082 42.25 73.999 44.0409 73.999 46.25V70C73.999 72.2091 72.2081 74 69.999 74H46.25C44.0409 74 42.25 72.2091 42.25 70V46.25C42.25 44.0409 44.0409 42.25 46.25 42.25H69.999ZM34.25 26C36.4591 26 38.25 27.7909 38.25 30V34.25C38.25 36.4591 36.4591 38.25 34.25 38.25H30C27.7909 38.25 26 36.4591 26 34.25V30C26 27.7909 27.7909 26 30 26H34.25ZM69.999 26C72.2082 26 73.999 27.7909 73.999 30V34.25C73.999 36.4591 72.2082 38.25 69.999 38.25H46.25C44.0409 38.25 42.25 36.4591 42.25 34.25V30C42.25 27.7909 44.0409 26 46.25 26H69.999Z" fill="url(#paint2_linear_1295_96)" />
                        <defs>
                            <linearGradient id="paint0_linear_1295_96" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#262626" />
                                <stop offset="1" stop-color="#121212" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1295_96" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3F3F3F" />
                                <stop offset="1" stop-color="#121212" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1295_96" x1="26" y1="50" x2="73.999" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>Adapts task execution to your <span>preferred pace and workflow</span></p>
                </div>
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="99" height="99" rx="23.5" fill="url(#paint0_linear_1295_101)" />
                        <rect x="0.5" y="0.5" width="99" height="99" rx="23.5" stroke="url(#paint1_linear_1295_101)" />
                        <path d="M44.4444 35.6C44.4444 40.1445 40.7135 43.8286 36.1111 43.8286C31.5087 43.8286 27.7778 40.1445 27.7778 35.6C27.7778 31.0555 31.5087 27.3714 36.1111 27.3714C40.7135 27.3714 44.4444 31.0555 44.4444 35.6Z" fill="url(#paint2_linear_1295_101)" />
                        <path d="M55.5556 54.8H72.2222V71.2571H55.5556V54.8Z" fill="url(#paint3_linear_1295_101)" />
                        <path d="M31.9444 58.9143L25 63.0286L31.9444 67.1429L36.1111 74L40.2778 67.1429L47.2222 63.0286L40.2778 58.9143L36.1111 52.0571L31.9444 58.9143Z" fill="url(#paint4_linear_1295_101)" />
                        <path d="M63.8889 26L75 43.8286H52.7778L63.8889 26Z" fill="url(#paint5_linear_1295_101)" />
                        <path d="M44.4444 35.6C44.4444 40.1445 40.7135 43.8286 36.1111 43.8286C31.5087 43.8286 27.7778 40.1445 27.7778 35.6C27.7778 31.0555 31.5087 27.3714 36.1111 27.3714C40.7135 27.3714 44.4444 31.0555 44.4444 35.6Z" stroke="url(#paint6_linear_1295_101)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M55.5556 54.8H72.2222V71.2571H55.5556V54.8Z" stroke="url(#paint7_linear_1295_101)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M31.9444 58.9143L25 63.0286L31.9444 67.1429L36.1111 74L40.2778 67.1429L47.2222 63.0286L40.2778 58.9143L36.1111 52.0571L31.9444 58.9143Z" stroke="url(#paint8_linear_1295_101)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M63.8889 26L75 43.8286H52.7778L63.8889 26Z" stroke="url(#paint9_linear_1295_101)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1295_101" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#262626" />
                                <stop offset="1" stop-color="#121212" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1295_101" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3F3F3F" />
                                <stop offset="1" stop-color="#121212" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_1295_101" x1="25" y1="50" x2="75" y2="50" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7053FF" />
                                <stop offset="1" stop-color="#D6B0BC" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>Instead of abstract advice — <span>specific, actionable steps you can take right away</span></p>
                </div>
            </div>
        </div>
    )
}

export default Solution