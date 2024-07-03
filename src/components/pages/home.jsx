import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../Hero/Hero.jsx";
import Products from "../Products/Products.jsx"
import Footer from "../Footer/Footer.jsx"
const home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
       <Hero handleOrderPopup={handleOrderPopup} />
    <Products/>
    <Footer/>
    </div>
  )
}

export default home