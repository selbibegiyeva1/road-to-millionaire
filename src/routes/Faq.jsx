import { useState, useEffect } from 'react';

// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import JoinWishlist from '../components/JoinWishlist';

function Faq() {
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
    <div>
      <Sidebar sidebar={sideBar} show={sidebar} click={wishList} />
      <Navbar click={wishList} sidebar={sideBar} />
      <JoinWishlist effect={wish} click={wishList} />
    </div>
  )
}

export default Faq