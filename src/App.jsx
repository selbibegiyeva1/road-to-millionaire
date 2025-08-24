import { Routes, Route } from "react-router";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './App.css';

// Routes
import Faq from './routes/Faq';
import Home from './routes/Home';

// Components
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Create Lenis instance for smooth, inertial scrolling
    const lenis = new Lenis({
      duration: 1.1, // overall "feel" (seconds to catch up)
      smoothWheel: true,
      smoothTouch: false, // let OS handle native touch unless you want inertia there too
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;


    // Keep GSAP's ScrollTrigger in sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);


    // Drive Lenis from GSAP's internal ticker for perfect sync
    const update = (time) => {
      // GSAP ticker uses seconds; Lenis expects ms
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0); // avoid frame skipping on tab switch


    // Refresh ScrollTrigger when layout changes (fonts/images)
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    ScrollTrigger.refresh();


    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  // Handy helper for programmatic scroll (anchors, buttons, etc.)
  const scrollTo = (target) => {
    lenisRef.current?.scrollTo(target, { offset: 0 });
  };

  // Example scroll-driven animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple reveal on scroll
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });


      // Parallax hero background
      gsap.to(".parallax", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });


    return () => ctx.revert();
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  )
}

export default App
