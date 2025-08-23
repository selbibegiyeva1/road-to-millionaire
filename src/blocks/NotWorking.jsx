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

    // Top sticky: pin heading + not-working-block together
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
                y: 16,
                scale: 0.98,
                willChange: "transform, opacity"
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: stickyRef.current,        // CHANGED: pin wrapper (heading + block)
                    start: "top 50px",
                    end: () =>
                        "+=" + Math.max(window.innerHeight * 0.8, points.length * 375),
                    pin: true,
                    scrub: true,
                    anticipatePin: 1
                }
            });

            const denom = Math.max(1, points.length - 1);
            points.forEach((el, i) => {
                tl.to(
                    el,
                    { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: "power1.out" },
                    i / denom
                );
            });

            if (revealEl) {
                gsap.set(revealEl, { "--reveal": "0%", opacity: 0 });

                tl.add("pointsDone", 1);
                tl.to(revealEl, {
                    "--reveal": "100%",
                    opacity: 1,           // fade up too
                    ease: "none",
                    duration: 0.6
                }, "pointsDone");
            }
        }, stickyRef);

        return () => ctx.revert();
    }, []);

    // Bottom-head sticky word-by-word (keep your exact markup)
    useLayoutEffect(() => {
        if (!bottomRef.current) return;

        if (window.innerWidth < 1560) return;

        // --- Wrap words without changing your existing spans or spacing ---
        const wrapWordsPreserveSpans = (root) => {
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
                acceptNode: (n) => (n.nodeValue && n.nodeValue.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT)
            });

            const textNodes = [];
            let n;
            while ((n = walker.nextNode())) textNodes.push(n);

            textNodes.forEach((textNode) => {
                const frag = document.createDocumentFragment();
                const parts = textNode.nodeValue.split(/(\s+)/); // keep spaces as tokens

                parts.forEach((token) => {
                    if (/^\s+$/.test(token)) {
                        frag.appendChild(document.createTextNode(token)); // preserve exact whitespace
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

        // Only wrap once
        if (!bottomRef.current.dataset.wordsWrapped) {
            wrapWordsPreserveSpans(bottomRef.current);
            bottomRef.current.dataset.wordsWrapped = "true";
        }

        const words = bottomRef.current.querySelectorAll(".bh-word");
        if (!words.length) return;

        const ctx = gsap.context(() => {
            gsap.set(words, { opacity: 0.4 });

            const reveal = gsap.to(words, {
                opacity: 1,
                ease: "none",
                stagger: 0.08,
                paused: true
            });

            ScrollTrigger.create({
                trigger: bottomRef.current,
                start: "top 250px",
                end: () => {
                    const perWord = 250; // tighten/loosen the pin
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
                <p className="working-head" id='bottom-head' style={{ maxWidth: 1200 }} ref={bottomRef}>
                    We <span className="grad">decided</span> to <span className="grad">change</span> that.
                </p>
            </center>
        </div>
    )
}

export default NotWorking