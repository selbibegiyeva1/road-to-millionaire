import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// CSS
import "../styles/HowItWorks.css";

function HowItWorks() {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null);
    const worksRef = useRef(null);

    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "World changes — and your plan changes with it. Our AI constantly adjusts your roadmap and tasks based on your results and fresh market data."

    useEffect(() => {
        if (!triggerRef.current || !lettersRef.current.length) return;

        // timeline that reveals color across characters; progress is driven by ScrollTrigger
        const reveal = gsap.to(lettersRef.current, {
            color: "white",
            stagger: 0.1,    
            ease: "none",
            paused: true
        });

        const st = ScrollTrigger.create({
            trigger: triggerRef.current,
            start: "top 100px", // same breathing room as cards
            end: () => {
                const perChar = 22; // px of scroll per character
                return "+=" + Math.max(window.innerHeight * 0.8, lettersRef.current.length * perChar);
            },
            pin: true,
            scrub: true,
            anticipatePin: 1,
            onUpdate: (self) => reveal.progress(self.progress)
        });

        return () => {
            st.kill();
            reveal.kill();
        };
    }, []);

    useLayoutEffect(() => {
        if (!worksRef.current) return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".works .work");

            // Stack cards: highest zIndex for the last one so it lays on top when it slides in
            gsap.set(cards, {
                position: "absolute",
                inset: 0,
                willChange: "transform",
                zIndex: (i) => i
            });

            // Start every card (except the first) below the viewport
            cards.forEach((card, i) => {
                if (i === 0) return;
                gsap.set(card, { yPercent: 100 });
            });

            // Timeline pinned to the whole stack
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: worksRef.current,
                    start: "top 100px", // pin only after 100px of viewport is passed
                    end: () => "+=" + window.innerHeight * (cards.length - 1),
                    pin: true,
                    scrub: true,
                    anticipatePin: 1
                }
            });

            // Each card slides up to cover the previous one
            cards.forEach((card, i) => {
                if (i === 0) return;
                tl.to(card, { yPercent: 0, ease: "none" }, ">"); // chain immediately
            });
        }, worksRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='HowItWorks' id='howitworks'>
            <div className="how-it-works-block">
                <p className="blockSub">How it works</p>
                <p className="blockHead worksHead">From chaos to a clear plan in three steps</p>

                <div className="works" ref={worksRef}>

                    {/* work 1 */}
                    <div className="work">
                        <div className='work-info'>
                            <p className='work-block-head'>Deep Diagnostics</p>
                            <p className="work-desc">You don’t fill out a questionnaire—you converse with the AI. Uncover your strengths, resources, and hidden potential to build a solid strategic foundation</p>
                        </div>
                        <div className="work-box">
                            <div className="work-subhead">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1C7 4.31371 4.31371 7 1 7C4.31371 7 7 9.68629 7 13C7 9.68629 9.68629 7 13 7C9.68629 7 7 4.31371 7 1Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C13.3807 14.5 14.5 15.6193 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C15.6193 14.5 14.5 13.3807 14.5 12Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Questions</p>
                            </div>
                            <p className="work-head">How do you respond to difficulties and setbacks?</p>
                            <div className="quests">
                                <div>
                                    <p>Analyze mistakes and adjust</p>
                                </div>
                                <div>
                                    <p>Pause to rethink</p>
                                </div>
                                <div>
                                    <p>Persist until I solve it</p>
                                </div>
                                <div>
                                    <p>Quit and switch tasks</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    {/* work 2 */}
                    <div className="work">
                        <div className='work-info'>
                            <p className='work-block-head'>Daily Progress</p>
                            <p className="work-desc">Your strategy turns into simple daily tasks. You always know the exact step to take today to move closer to your goal</p>
                        </div>
                        <div className="work-box">
                            <div className="work-subhead">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1C7 4.31371 4.31371 7 1 7C4.31371 7 7 9.68629 7 13C7 9.68629 9.68629 7 13 7C9.68629 7 7 4.31371 7 1Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C13.3807 14.5 14.5 15.6193 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C15.6193 14.5 14.5 13.3807 14.5 12Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Tasks</p>
                            </div>
                            <p className="work-head">Active Tasks</p>
                            <p className='work-box-desc'>Changing the world in three key ways</p>
                            <ul className="work-points">
                                <li>
                                    <span>1st</span>
                                    <p>Release a working product prototype with core features and built-in feedback collection.</p>
                                </li>
                                <li>
                                    <span>2nd</span>
                                    <p>Acquire 30 active users through targeted outreach and document their pain points.</p>
                                </li>
                                <li>
                                    <span>3rd</span>
                                    <p>Prepare the pitch deck and financial model and schedule meetings with 3 potential investors.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />

                    {/* work 3 */}
                    <div className="work">
                        <div className='work-info'>
                            <p className='work-block-head'>Choose Your Path</p>
                            <p className="work-desc">Road To Millionaire crafts unique strategies precisely tuned to you. Pick the one that suits you best</p>
                        </div>
                        <div className="work-box">
                            <div className="work-subhead">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1C7 4.31371 4.31371 7 1 7C4.31371 7 7 9.68629 7 13C7 9.68629 9.68629 7 13 7C9.68629 7 7 4.31371 7 1Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C13.3807 14.5 14.5 15.6193 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C15.6193 14.5 14.5 13.3807 14.5 12Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Tasks</p>
                            </div>
                            <p className="work-head head-3">Live-Streaming & Virtual Events</p>
                            <div className="work-graph">
                                <div>
                                    <p>Concept</p>
                                    <span>Tiered pricing by number of channels/viewers.</span>
                                </div>
                                <div>
                                    <p>Infrastructure</p>
                                    <span>PTZ cameras, ATEM/Tricaster, venue with 1 Gbps uplink.</span>
                                </div>
                                <div>
                                    <p>Pilot</p>
                                    <span>Run an internal live stream to stress-test latency.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={triggerRef} className="work-moto">
                    {text.split("").map((letter, index) => (
                        <span key={index} ref={setlettersRef}>
                            {letter}
                        </span>
                    ))}
                </div>
                {/* World changes — and your plan changes with it. Our AI constantly adjusts your roadmap and tasks based on your results and fresh market data. */}
            </div>
        </div>
    )
}

export default HowItWorks