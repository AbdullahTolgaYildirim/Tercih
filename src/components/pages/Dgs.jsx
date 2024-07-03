import React, { useState } from 'react';
import './Universiteler.css'; // Dgs.css dosyasını ekledik

const Dgs = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = (key) => {
    setShowLinks(key);
  };

  return (
    <div className="containerUniversiteler"> {/* Ana container */}
      {/* Her bir div yan yana gelecek */}
      <div className='AntalyaUniversiteler'>
        <h2>Adana Bölgesi</h2>
        <button onClick={()=>toggleLinks('Adana')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Adana' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Cukurova" target="_blank">Çukurova Üniverstesi </a>
            <a href="http://localhost:5173/AlparslanTurkes" target="_blank">Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi  </a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Adıyaman Bölgesi</h2>
        <button onClick={()=>toggleLinks('Adıyaman')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Adıyaman' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/ArdahanUniversitesi" target="_blank">Adıyaman  Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Afyon Bölgesi</h2>
        <button onClick={()=>toggleLinks('Afyon')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Afyon' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/AfyonKocatepe" target="_blank">Afyon Kocatepe Üniversitesi</a>
            <a href="http://localhost:5173/AfyonSag" target="_blank">Afyonkarahisar Sağlık Bilimleri Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Ağrı Bölgesi</h2>
        <button onClick={()=>toggleLinks('Ağrı')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Ağrı' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Agri" target="_blank">Ağrı İbrahim Çeçen Üniversitesi</a>
          
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Amasya Bölgesi</h2>
        <button onClick={()=>toggleLinks('Amasya')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Amasya' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Amasya" target="_blank">Amasya Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Ankara Bölgesi</h2>
        <button onClick={()=>toggleLinks('Ankara')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Ankara' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/AnkaraJandarma" target="_blank">Jandarma ve Sahil Güvenlik Akademisi</a>
            <a href="http://localhost:5173/AnkaraUniversitesi" target="_blank">Ankara Üniversitesi</a>
            <a href="http://localhost:5173/AnkaraMuzik" target="_blank">Ankara Müzik ve Güzel Sanatlar Üniversitesi</a>
            <a href="http://localhost:5173/AnkaraHaci" target="_blank">Ankara Hacı Bayram Veli Üniversitesi</a>
            <a href="http://localhost:5173/AnkaraSosyal" target="_blank">Ankara Sosyal Bilimler Üniversitesi</a>
            <a href="http://localhost:5173/GaziUniversitesi" target="_blank">Gazi Üniversitesi</a>
            <a href="http://localhost:5173/Hacettepe" target="_blank">Hacettepe Üniversitesi</a>
            <a href="http://localhost:5173/" target="_blank">Orta Doğu Teknik Üniversitesi</a>
            <a href="http://localhost:5173/AnkaraYildi" target="_blank">Ankara Yıldırım Beyazıt Üniversitesi</a>
            <a href="http://localhost:5173/PolisAkademisi" target="_blank">Polis Akademisi</a>
            <a href="http://localhost:5173/AnkaraBilimUni" target="_blank">Ankara Bilim Üniversitesi</a>
            <a href="http://localhost:5173/AnkaraMedipol" target="_blank">Ankara Medipol Üniversitesi</a>
            <a href="http://localhost:5173/AtilimUniversitesi" target="_blank">Atılım Üniversitesi</a>
            <a href="http://localhost:5173/BaskentUniversitesi" target="_blank">Başkent Üniversitesi</a>
            <a href="http://localhost:5173/Cankaya" target="_blank">Çankaya Üniversitesi</a>
            <a href="http://localhost:5173/Bilkent" target="_blank">İhsan Doğramacı Bilkent Üniversitesi</a>
            <a href="http://localhost:5173/AkevUniversitesi" target="_blank">Lokman Hekim Üniversitesi</a>
            <a href="http://localhost:5173/Ostim" target="_blank">Ostim Teknik Üniversitesi</a>
            <a href="http://localhost:5173/Ted" target="_blank">TED Üniversitesi</a>
            <a href="http://localhost:5173/TOBB" target="_blank">TOBB Ekonomi ve Teknoloji Üniversitesi</a>
            <a href="http://localhost:5173/AnkaraUfuk" target="_blank">Ufuk Üniversitesi</a>
            <a href="http://localhost:5173/TurkHavaKurumu" target="_blank">Türk Hava Kurumu Üniversitesi</a>
           
          
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Antalya Bölgesi</h2>
        <button onClick={()=>toggleLinks('Antalya')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Antalya' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/AntalyaBilimUniversitesi" target="_blank">Antalya Bilim Üniversitesi</a>
            <a href="http://localhost:5173/AkdenizUniversitesi" target="_blank">Akdeniz Üniversitesi</a>
            <a href="http://localhost:5173/AkevUniversitesi" target="_blank">Belek Üniversitesi</a>
            <a href="http://localhost:5173/Alanya" target="_blank">Alanya Alaaddin Keykubat Üniversitesi </a>
            <a href="http://localhost:5173/AlanyaUniversitesi" target="_blank">Alanya Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Artvin Bölgesi</h2>
        <button onClick={()=>toggleLinks('Artvin')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Artvin' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Artvin" target="_blank">Artvin Çoruh Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Aydın Bölgesi</h2>
        <button onClick={()=>toggleLinks('Aydın')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Aydın' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/AydinUniversitesi" target="_blank">Aydın Adnan Menderes Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Balıkesir Bölgesi</h2>
        <button onClick={()=>toggleLinks('Balıkesir')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Balıkesir' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/BalıkesirUniversitesi" target="_blank">Balıkesir Üniversitesi</a>
            <a href="http://localhost:5173/BandırmaUniversitesi" target="_blank">Bandırma Onyedi Eylül Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Bilecik Bölgesi</h2>
        <button onClick={()=>toggleLinks('Bilecik')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Bilecik' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/BilecikSeyhEdebali" target="_blank">Bilecik Şeyh Edebali Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Bingöl Bölgesi</h2>
        <button onClick={()=>toggleLinks('Bingöl')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Bingöl' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Bingol" target="_blank">Bingöl Üniversitesi</a>
           
          </div>
          
        )}
        
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Bitlis Bölgesi</h2>
        <button onClick={()=>toggleLinks('Bitlis')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Bitlis' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Bitlis" target="_blank">Bitlis Eren Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Bolu Bölgesi</h2>
        <button onClick={()=>toggleLinks('Bolu')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Bolu' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/BoluUniversitesi" target="_blank">Bolu Abant İzzet Baysal Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Burdur Bölgesi</h2>
        <button onClick={()=>toggleLinks('Burdur')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Burdur' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/MehmetAkifErsoy" target="_blank">Burdur Mehmet Akif Ersoy Üniversitesi</a>
          
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Bursa Bölgesi</h2>
        <button onClick={()=>toggleLinks('Bursa')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Bursa' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/BursaTeknikUniversitesi" target="_blank">Bursa Teknik Üniversitesi</a>
            <a href="http://localhost:5173/BursaUludagUniversitesi" target="_blank">Bursa Uludağ Üniversitesi</a>
            <a href="http://localhost:5173/Mudanya" target="_blank">Mudanya Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Çanakkale Bölgesi</h2>
        <button onClick={()=>toggleLinks('Çanakkale')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Çanakkale' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/CanakkaleUni" target="_blank">Çanakkale Onsekiz Mart Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Çankırı Bölgesi</h2>
        <button onClick={()=>toggleLinks('Çankırı')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Çankırı' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Cankırı" target="_blank">Çankırı Karatekin Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Çorum Bölgesi</h2>
        <button onClick={()=>toggleLinks('Çorum')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Çorum' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Cukurova" target="_blank">Hitit Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Denizli Bölgesi</h2>
        <button onClick={()=>toggleLinks('Denizli')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Denizli' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Pamukkale" target="_blank">Pamukkale Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Diyarbakır Bölgesi</h2>
        <button onClick={()=>toggleLinks('Diyarbakır')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Diyarbakır' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Dicle" target="_blank">Dicle Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Edirne Bölgesi</h2>
        <button onClick={()=>toggleLinks('Edirne')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Edirne' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Trakya" target="_blank">Trakya Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Elazığ Bölgesi</h2>
        <button onClick={()=>toggleLinks('Elazığ')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Elazığ' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Firat" target="_blank">Fırat Üniversitesi  </a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Erzincan Bölgesi</h2>
        <button onClick={()=>toggleLinks('Erzincan')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Erzincan' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/ErzincanUniversitesi" target="_blank">Erzincan Binali Yıldırım Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Erzurum Bölgesi</h2>
        <button onClick={()=>toggleLinks('Erzurum')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Erzurum' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/ErzurumTeknik" target="_blank">Erzurum Teknik Üniversitesi</a>
            <a href="http://localhost:5173/ErzurumAtaturk" target="_blank">Atatürk Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Eskişehir Bölgesi</h2>
        <button onClick={()=>toggleLinks('Eskişehir')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Eskişehir' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/EskisehirAnadolu" target="_blank">Anadolu Üniversitesi</a>
            <a href="http://localhost:5173/EskisehirGazi" target="_blank">Eskişehir Osmangazi Üniversitesi</a>
            <a href="http://localhost:5173/EskisehirAnadolu" target="_blank">Eskişehir Teknik Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Gaziantep Bölgesi</h2>
        <button onClick={()=>toggleLinks('Gaziantep')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Gaziantep' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/GaziUniversitesi" target="_blank">Gaziantep Üniversitesi</a>
            <a href="http://localhost:5173/Gaziantep" target="_blank">Gaziantep İslam Bilim ve Teknoloji Üniversitesi</a>
            <a href="http://localhost:5173/HasanKalyoncu" target="_blank">Hasan Kalyoncu Üniversitesi</a>
            <a href="http://localhost:5173/Sanko" target="_blank">Sanko Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Giresun Bölgesi</h2>
        <button onClick={()=>toggleLinks('Giresun')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Giresun' && (
          <div className="linksContainer">
            <a href="https://www.youtube.com/watch?v=3PfFcsO-sr0" target="_blank">Giresun Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Gümüşhane Bölgesi</h2>
        <button onClick={()=>toggleLinks('Gümüşhane')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Gümüşhane' && (
          <div className="linksContainer">
            <a href="https://www.youtube.com/watch?v=3PfFcsO-sr0" target="_blank">Gümüşhane Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Hakkari Bölgesi</h2>
        <button onClick={()=>toggleLinks('Hakkari')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Hakkari' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Hakkari" target="_blank">Hakkari Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Hatay Bölgesi</h2>
        <button onClick={()=>toggleLinks('Hatay')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Hatay' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/IskenderunTeknik" target="_blank">İskenderun Teknik Üniversitesi</a>
            <a href="http://localhost:5173/HatayMustafa" target="_blank">Hatay Mustafa Kemal Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Isparta Bölgesi</h2>
        <button onClick={()=>toggleLinks('Isparta')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Isparta' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/IspartaUygulamali" target="_blank">Süleyman Demirel Üniversitesi</a>
            <a href="http://localhost:5173/IspartaUygulamali" target="_blank">Isparta Uygulamalı Bilimler Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Mersin Bölgesi</h2>
        <button onClick={()=>toggleLinks('Mersin')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Mersin' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Mersin" target="_blank">Mersin Üniversitesi</a>
            <a href="http://localhost:5173/Tarsus" target="_blank">Tarsus Üniversitesi</a>
            <a href="http://localhost:5173/CagUniversitesi" target="_blank">Çağ Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>İstanbul Bölgesi</h2>
        <button onClick={()=>toggleLinks('İstanbul')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='İstanbul' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Bogazici" target="_blank">Boğaziçi Üniversitesi</a>
            <a href="http://localhost:5173/Galatasaray" target="_blank">Galatasaray Üniversitesi</a>
            <a href="http://localhost:5173/IstanbulTeknik" target="_blank">İstanbul Teknik Üniversitesi</a>
            <a href="http://localhost:5173/IstanbulUni" target="_blank">İstanbul Üniversitesi</a>
            <a href="http://localhost:5173/Marmara" target="_blank">Marmara Üniversitesi</a>
            <a href="http://localhost:5173/MimarSinan" target="_blank">Mimar Sinan Güzel Sanatlar Üniversitesi</a>
            <a href="http://localhost:5173/YildizTeknik" target="_blank">Yıldız Teknik Üniversitesi</a>
          </div>
          
        )}
      </div>
     
      <div className='AntalyaUniversiteler'>
        <h2>İzmir Bölgesi</h2>
        <button onClick={()=>toggleLinks('İzmir')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='İzmir' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/DokuzEylulUniversitesi" target="_blank">Dokuz Eylül Üniversitesi</a>
            <a href="http://localhost:5173/EgeUniversitesi" target="_blank">Ege Üniversitesi</a>
            <a href="http://localhost:5173/IzmirYuksekTek" target="_blank">İzmir Yüksek Teknoloji Enstitüsü</a>
            <a href="http://localhost:5173/KatipCelebi" target="_blank">İzmir Kâtip Çelebi Üniversitesi</a>
            <a href="http://localhost:5173/AkevUniversitesi" target="_blank">İzmir Ekonomi Üniversitesi</a>
            <a href="http://localhost:5173/İzmirBakircay" target="_blank">İzmir Bakırçay Üniversitesi</a>
            <a href="http://localhost:5173/IzmirYuksekTek" target="_blank">İzmir Demokrasi Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kars Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kars')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kars' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Kafkas" target="_blank">Kafkas Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kastamonu Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kastamonu')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kastamonu' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Kastamonu1" target="_blank">Kastamonu Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kayseri Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kayseri')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kayseri' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/AbdullahGulUni" target="_blank">Abdullah Gül Üniversitesi</a>
            <a href="http://localhost:5173/ErciyesUniversitesi" target="_blank">Erciyes Üniversitesi</a>
            <a href="http://localhost:5173/Kayseri" target="_blank">Kayseri Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kırklareli Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kırklareli')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kırklareli' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Kirklareli" target="_blank">Kırklareli Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kırşehir Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kırşehir')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kırşehir' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/AhiEvran" target="_blank">Kırşehir Ahi Evran Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kocaeli Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kocaeli')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kocaeli' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Kocaeli" target="_blank">Kocaeli Üniversitesi</a>
            <a href="http://localhost:5173/Kocaeli" target="_blank">Kocaeli Sağlık ve Teknoloji Üniversitesi</a>
            <a href="http://localhost:5173/GebzeTeknik" target="_blank">Gebze Teknik Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Konya Bölgesi</h2>
        <button onClick={()=>toggleLinks('Konya')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Konya' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/KonyaTek" target="_blank">Konya Teknik Üniversitesi</a>
            <a href="http://localhost:5173/NecmettinErbakan" target="_blank">Necmettin Erbakan Üniversitesi</a>
            <a href="http://localhost:5173/Selcuk" target="_blank">Selçuk Üniversitesi</a>
            <a href="http://localhost:5173/KonyaGida" target="_blank">Konya Gıda ve Tarım Üniversitesi</a>
            <a href="http://localhost:5173/KTO" target="_blank">KTO Karatay Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kütahya Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kütahya')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kütahya' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/KutahyaDumlu" target="_blank">Kütahya Dumlupınar Üniversitesi  </a>
            <a href="http://localhost:5173/KutahyaDumlu" target="_blank">Kütahya Sağlık Bilimleri Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Malatya Bölgesi</h2>
        <button onClick={()=>toggleLinks('Malatya')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Malatya' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Inonu" target="_blank">İnönü Üniversitesi</a>
            <a href="http://localhost:5173/MalatyaTurgut" target="_blank">Malatya Turgut Özal Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Manisa Bölgesi</h2>
        <button onClick={()=>toggleLinks('Manisa')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Manisa' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/CelalBayar" target="_blank">Manisa Celal Bayar Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kahramanmaraş Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kahramanmaraş')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kahramanmaraş' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/SutcuImam" target="_blank">Kahramanmaraş Sütçü İmam Üniversitesi</a>
            <a href="http://localhost:5173/Istiklal" target="_blank">Kahramanmaraş İstiklal Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Mardin Bölgesi</h2>
        <button onClick={()=>toggleLinks('Mardin')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Mardin' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Mardin" target="_blank">Mardin Artuklu Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Muğla Bölgesi</h2>
        <button onClick={()=>toggleLinks('Muğla')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Muğla' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/SıtkıKocman" target="_blank">Muğla Sıtkı Koçman Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Muş Bölgesi</h2>
        <button onClick={()=>toggleLinks('Muş')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Muş' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/AlparslanTurkes" target="_blank">Muş Alparslan Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Nevşehir Bölgesi</h2>
        <button onClick={()=>toggleLinks('Nevşehir')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Nevşehir' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Nevşehir Hacı Bektaş Veli Üniversitesi</a>
            <a href="http://localhost:5173/AkdenizUniversitesi" target="_blank">Kapadokya Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Niğde Bölgesi</h2>
        <button onClick={()=>toggleLinks('Niğde')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Niğde' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Nigde" target="_blank">Niğde Ömer Halisdemir Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Ordu Bölgesi</h2>
        <button onClick={()=>toggleLinks('Ordu')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Ordu' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Ordu" target="_blank">Ordu Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Rize Bölgesi</h2>
        <button onClick={()=>toggleLinks('Rize')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Rize' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/RecepTayyip" target="_blank">Recep Tayyip Erdoğan Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Sakarya Bölgesi</h2>
        <button onClick={()=>toggleLinks('Sakarya')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Sakarya' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Sakarya" target="_blank">Sakarya Üniversitesi</a>
            <a href="http://localhost:5173/SakaryaUygulamali" target="_blank">Sakarya Uygulamalı Bilimler Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Samsun Bölgesi</h2>
        <button onClick={()=>toggleLinks('Samsun')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Samsun' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Ondokuzmayıs" target="_blank">Ondokuz Mayıs Üniversitesi</a>
            <a href="http://localhost:5173/Samsun" target="_blank">Samsun Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Siirt Bölgesi</h2>
        <button onClick={()=>toggleLinks('Siirt')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Siirt' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Siirt Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Sinop Bölgesi</h2>
        <button onClick={()=>toggleLinks('Sinop')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Sinop' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Sinop" target="_blank">Sinop Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Sivas Bölgesi</h2>
        <button onClick={()=>toggleLinks('Sivas')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Sivas' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/SivasCumhur" target="_blank">Sivas Cumhuriyet Üniversitesi</a>
            <a href="http://localhost:5173/SivasBilim" target="_blank">Sivas Bilim ve Teknoloji Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Tekirdağ Bölgesi</h2>
        <button onClick={()=>toggleLinks('Tekirdağ')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Tekirdağ' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Trakya" target="_blank">Tekirdağ Namık Kemal Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Tokat Bölgesi</h2>
        <button onClick={()=>toggleLinks('Tokat')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Tokat' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Tokat Gaziosmanpaşa Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Trabzon Bölgesi</h2>
        <button onClick={()=>toggleLinks('Trabzon')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Trabzon' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Katu" target="_blank">Karadeniz Teknik Üniversitesi</a>
            <a href="http://localhost:5173/Trabzon" target="_blank">Trabzon Üniversitesi</a>
            <a href="http://localhost:5173/AvrasyaUniversitesi" target="_blank">Avrasya Üniversitesi</a>
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Tunceli Bölgesi</h2>
        <button onClick={()=>toggleLinks('Tunceli')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Tunceli' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Tunceli" target="_blank">Munzur Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Şanlıurfa Bölgesi</h2>
        <button onClick={()=>toggleLinks('Şanlıurfa')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Şanlıurfa' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Harran" target="_blank">Harran Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2> Uşak Bölgesi</h2>
        <button onClick={()=>toggleLinks('Uşak')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Uşak' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Uşak Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Van Bölgesi</h2>
        <button onClick={()=>toggleLinks('Van')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Van' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Van Yüzüncü Yıl Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Yozgat Bölgesi</h2>
        <button onClick={()=>toggleLinks('Yozgat')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Yozgat' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">	Yozgat Bozok Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Zonguldak Bölgesi</h2>
        <button onClick={()=>toggleLinks('Zonguldak')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks =='Zonguldak' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/BulentEcevitUniversitesi" target="_blank">Zonguldak Bülent Ecevit Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Aksaray Bölgesi</h2>
        <button onClick={()=>toggleLinks('Aksaray')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Aksaray' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Aksaray" target="_blank">Aksaray Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Bayburt Bölgesi</h2>
        <button onClick={()=>toggleLinks('Baybur')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Bayburt' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Bayburt Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Karaman Bölgesi</h2>
        <button onClick={()=>toggleLinks('Karaman')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Karaman' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Karaman" target="_blank">Karamanoğlu Mehmetbey Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kırıkkale Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kırıkkale')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Kırıkkale' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Kirikkale" target="_blank">Kırıkkale Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Batman Bölgesi</h2>
        <button onClick={()=>toggleLinks('Batman')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks =='Batman' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/BatmanUniversitesi" target="_blank">Batman Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Şırnak Bölgesi</h2>
        <button onClick={()=>toggleLinks('Şırnak')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Şırnak' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Şırnak Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Bartın Bölgesi</h2>
        <button onClick={()=>toggleLinks('Bartın')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Bartın' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/BartınUniversitesi" target="_blank">Bartın Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Ardahan Bölgesi</h2>
        <button onClick={()=>toggleLinks('Ardahan')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks =='Ardahan' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/ArdahanUniversitesi" target="_blank">Ardahan Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Iğdır Bölgesi</h2>
        <button onClick={()=>toggleLinks('Iğdır')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks=='Iğdır' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Iğdır Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Yalova Bölgesi</h2>
        <button onClick={()=>toggleLinks('Yalova')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks =='Yalova' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/" target="_blank">Yalova Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Karabük Bölgesi</h2>
        <button onClick={()=>toggleLinks('Karabük')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks =='Karabük' && (
          <div className="linksContainer">
            <a href="https://www.youtube.com/watch?v=3PfFcsO-sr0" target="_blank">Karabük Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Kilis Bölgesi</h2>
        <button onClick={()=>toggleLinks('Kilis')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks =='Kilis' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Kilis" target="_blank">Kilis 7 Aralık Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Osmaniye Bölgesi</h2>
        <button onClick={() => toggleLinks('osmaniye')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks === 'osmaniye' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/KorkutAta" target="_blank">	Osmaniye Korkut Ata Üniversitesi</a>
            
          </div>
          
        )}
      </div>
      <div className='AntalyaUniversiteler'>
        <h2>Düzce Bölgesi</h2>
        <button onClick={() => toggleLinks('Düzce')} className="toggleButton">
          Üniversiteleri Göster
        </button>
        {showLinks === 'Düzce' && (
          <div className="linksContainer">
            <a href="http://localhost:5173/Duzce" target="_blank">Düzce Üniversitesi</a>
           
          </div>
          
        )}
      </div>
      
    </div>
  );
}

export default Dgs;

