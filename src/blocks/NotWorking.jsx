import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// CSS
import "../styles/NotWorking.css";

gsap.registerPlugin(ScrollTrigger);

function NotWorking() {
    const stickyRef = useRef(null); // NEW: wrapper that includes the heading + block
    const blockRef = useRef(null);  // keep: used for querying points
    const bottomRef = useRef(null);

    // Top sticky: pin heading + not-working-block
    useLayoutEffect(() => {
        if (!stickyRef.current || !blockRef.current) return;
        if (window.innerWidth < 1560) return;

        const ctx = gsap.context(() => {
            // NEW: prepare the heading for masking
            const headingP = blockRef.current.querySelector(".not-work-head p");
            let revealEl = null;
            if (headingP && !headingP.dataset.revealWrapped) {
                const span = document.createElement("span");
                span.className = "nw-reveal";
                span.textContent = headingP.textContent;      // keep the exact text
                headingP.textContent = "";
                headingP.appendChild(span);
                headingP.dataset.revealWrapped = "true";
                revealEl = span;
            } else if (headingP) {
                revealEl = headingP.querySelector(".nw-reveal");
            }

            // Only reveal the points, not the heading
            const points = gsap.utils.toArray(".not-working-block .not-work-point");

            gsap.set(points, {
                autoAlpha: 0,
                scale: 0.85,
                y: 0,
                transformOrigin: "50% 50%",
                willChange: "transform, opacity, filter",
                force3D: true
            });

            const REVEAL_DUR = 0.50;  // how long each point animates in
            const HOLD_DUR = 1.75;  // how long each point "rests" before the next one
            const PX_PER_SEC = 520;   // scroll pixels per 1s of timeline duration

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            points.forEach((el) => {
                // reveal
                tl.to(el, {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: REVEAL_DUR
                });
                // spacer = visual "pause" while scrubbing
                tl.to({}, { duration: HOLD_DUR, ease: "none" });
            });

            if (revealEl) {
                gsap.set(revealEl, { "--reveal": "0%", opacity: 0 });
                tl.to(revealEl, {
                    "--reveal": "100%",
                    opacity: 1,
                    ease: "none",
                    duration: 1
                });
            }

            // Now wire the timeline to scroll and size the range to its duration
            const st = ScrollTrigger.create({
                trigger: stickyRef.current,
                start: "top 100px",
                end: () => "+=" + Math.round(tl.duration() * PX_PER_SEC),
                pin: true,
                scrub: true,
                anticipatePin: 1,
                animation: tl
            });

            const onResize = () => st.refresh();
            window.addEventListener("resize", onResize);

            // cleanup
            return () => {
                window.removeEventListener("resize", onResize);
                st.kill();
                tl.kill();
            };
        }, stickyRef);

        return () => ctx.revert();
    }, []);

    // Bottom-head sticky word-by-word (keep your exact markup)
    useLayoutEffect(() => {
        if (!bottomRef.current) return;
        if (window.innerWidth < 1560) return;

        const wrapWordsPreserveSpans = (root) => {
            const walker = document.createTreeWalker(
                root,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: (n) =>
                        n.nodeValue && n.nodeValue.trim().length > 0
                            ? NodeFilter.FILTER_ACCEPT
                            : NodeFilter.FILTER_REJECT
                }
            );
            const textNodes = [];
            let n;
            while ((n = walker.nextNode())) textNodes.push(n);

            textNodes.forEach((textNode) => {
                const frag = document.createDocumentFragment();
                const parts = textNode.nodeValue.split(/(\s+)/);

                parts.forEach((token) => {
                    if (/^\s+$/.test(token)) {
                        frag.appendChild(document.createTextNode(token));
                    } else {
                        const span = document.createElement("span");
                        span.className = "bh-word";
                        span.textContent = token;
                        frag.appendChild(span);
                    }
                });

                textNode.parentNode.replaceChild(frag, textNode);
            });
        };

        if (!bottomRef.current.dataset.wordsWrapped) {
            wrapWordsPreserveSpans(bottomRef.current);
            bottomRef.current.dataset.wordsWrapped = "true";
        }

        const words = bottomRef.current.querySelectorAll(".bh-word");
        if (!words.length) return;

        const ctx = gsap.context(() => {
            // Start smaller and dim
            gsap.set(words, { opacity: 0.35, scale: 0.95, display: "inline-block", willChange: "opacity, transform" });

            const reveal = gsap.to(words, {
                opacity: 1,
                scale: 1,
                ease: "power2.out",
                stagger: 0.1,
                paused: true
            });

            ScrollTrigger.create({
                trigger: bottomRef.current,
                start: "top 250px",
                end: () => {
                    const perWord = 220;
                    return "+=" + Math.max(0.5 * window.innerHeight, words.length * perWord);
                },
                pin: true,
                scrub: true,
                anticipatePin: 1,
                onUpdate: (self) => reveal.progress(self.progress)
            });
        }, bottomRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='NotWorking'>
            <center>
                <p className="working-head" id="grad-span"><span>Stop playing a game</span> whose rules weren’t made for you!</p>
            </center>
            <center>
                <div className="grad-line" data-aos="fade-down" data-aos-delay="300"></div>
            </center>
            <center>
                <p className="working-head working-two">Throughout the 21st century we’ve been taught success from a single template:</p>
            </center>
            <br /><br /><br />

            <div className="nw-sticky" ref={stickyRef}>
                <center>
                    <p className="working-head working-two" id="work-grad" style={{ maxWidth: 565 }}>universal "secrets" advice from books other people's success stories</p>
                </center>
                <center>
                    <div className="not-working-block" ref={blockRef}>
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
            </div>
            <center>
                <div className="grad-line" data-aos="fade-down" data-aos-delay="250"></div>
            </center>
            <center>
                <p className="working-head working-two" id="grad-span" style={{ maxWidth: 1050 }}><span>But that’s playing with someone else’s cards.</span> You’re trying to copy a path that ignores your unique mix of skills, experience, resources, and ambition.</p>
            </center>
            <center>
                {/* This is the heading that now reveals by word opacity only */}
                <p
                    className="working-head"
                    id="bottom-head"
                    style={{ maxWidth: 1200 }}
                    ref={bottomRef}
                >
                    We <span className="grad">decided</span> to <span className="grad">change</span> that.
                </p>
            </center>
        </div>
    )
}

export default NotWorking