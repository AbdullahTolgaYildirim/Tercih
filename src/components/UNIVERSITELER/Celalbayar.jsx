import React from 'react'
import Products from '../Products/Products'

import AOS from "aos";
import "aos/dist/aos.css";
import Hero from '../Hero/Hero';
import CelalBayarUniProducts from '../Products/CelalbayarProducts';
const CelalBayar = () => {
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
  <div class="mb-8">
  <div class="flex justify-center items-center mt-8">
    <h1 class="text-center text-4xl font-bold text-white bg-gray-800 p-4 rounded-lg">Celal Bayar  Üniversitesi</h1>
  </div>
</div>

 
        <Hero/>
        <CelalBayarUniProducts handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default CelalBayar