import { useEffect, useState } from 'react';

// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import JoinWishlist from '../components/JoinWishlist';

// Blocks
import Hero from '../blocks/Hero';
import Problem from '../blocks/Problem';
import NotWorking from '../blocks/NotWorking';
import Solution from '../blocks/Solution';
import HowItWorks from '../blocks/HowItWorks';
import YourRight from '../blocks/YourRight';
import YourJourney from '../blocks/YourJourney';

function Home() {
    const [wish, setWish] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const wishList = () => setWish(!wish);
    const sideBar = () => setSidebar(!sidebar);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape" && wish) {
                setWish(false);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [wish]);
    return (
        <div className='Home'>
            <Sidebar sidebar={sideBar} show={sidebar} click={wishList} />
            <JoinWishlist effect={wish} click={wishList} />
            <Navbar click={wishList} sidebar={sideBar} />
            <Hero click={wishList} sidebar={sideBar} />
            <Slider />
            <Problem />
            <NotWorking />
            <Solution />
            <HowItWorks />
            <YourRight />
            <YourJourney click={wishList} />
            <Footer />
        </div>
    )
}

export default Home