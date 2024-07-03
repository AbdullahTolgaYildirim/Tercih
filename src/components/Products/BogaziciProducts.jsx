import React from "react";
import Image1 from "../../assets/cardimage/Img5Id1.jpeg";
import Image2 from "../../assets/cardimage/Img6Id2.jpeg";
import Image3 from "../../assets/cardimage/Img7Id3.png";
import Image4 from "../../assets/cardimage/Img8Id4.png";
import Image5 from "../../assets/cardimage/Img9Id5.png";
import Image6 from "../../assets/cardimage/Img10Id6.png";
import Image8 from "../../assets/cardimage/Img8.png";
import Image11 from "../../assets/cardimage/Img11.png";
import Image13 from "../../assets/cardimage/Img13.png";
import Image14 from "../../assets/cardimage/Img14.png";
import Image17 from "../../assets/cardimage/Img17.jpeg";
import Image18 from "../../assets/cardimage/Img18.jpeg";



import { data } from "autoprefixer";


const ProductsData = [
  {
    id: 1,
    img: Image1,
    title: "Bölüm Ve Programlar",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  {
    id: 2,
    img: Image2,
    title: "Mezun İstihdam Oranları",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  {
    id: 3,
    img: Image3,
    title: "Uygulamalı Eğitim",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  {
    id: 4,
    img: Image4,
    title: "Staj İmkanları",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    href:"https://www.youtube.com/watch?v=a0GLPMq8k5o&list=RD3PfFcsO-sr0&index=19",
  },
  {
    id: 5,
    img: Image5,
    title: "Yurt İmkanları Ve Konaklama",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  {
    id: 6,
    img: Image6,
    title: "Öğrenci Kulüpleri Ve Topluluklar",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  {
    id: 7,
    img: Image6,
    title: "Sportif Faaliyetler ve Spor Takımları",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  
  {
    id: 9,
    img: Image8,
    title: "Kütüphane Ve Dijital Kaynaklar",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  

  {
    id: 12,
    img: Image11,
    title: "Uluslararası Değişim Programları",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },

  {
    id: 14,
    img: Image13,
    title: "Eğitim Teknolojileri Ve Uygulamaları",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  {
    id: 15,
    img: Image14,
    title: "Akademik Destek Ve Öğrenci Başarı Merkezleri",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },


  {
    id: 18,
    img: Image17,
    title: "Eğlence Ve Kültürel Etkinlikler",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
  {
    id: 19,
    img: Image18,
    title: "Yemekhane Ve Beslenme Seçenekleri",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    href:"https://www.youtube.com/watch?v=zqYsnkf5mzI&list=RD3PfFcsO-sr0&index=14",
  },
];

const BogaziciUniProducts = () => {
  const handleClick = () => {
      
const redirectTo = data.href;

// Yönlendirme işlemi
window.location.href = redirectTo;
    };
return (
  <div className="mt-14 mb-12">
    <div className="container">
      {/* Header section */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          Üniversite Tercih Rehberimizden Faydalanın
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Üniversiteler 
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
        Üniversitemiz Hakkında bilgilere alt kısımdan erişebilirsiniz
        </p>
      </div>
      {/* Body section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {/* card section */}
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
                
               
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
               
                 <button onClick={handleClick}>  <a href={data.href}> Click</a> </button> 
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-black py-1 px-5 rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default BogaziciUniProducts;