import React from "react";
import Navbardeneme  from "./components/NavbarDeneme.jsx"
import './App.css'

import { Route ,Routes } from 'react-router-dom'
import Home from "./components/pages/home.jsx";
import Calculater from "./components/pages/calculater.jsx";
import İletisim from "./components/pages/iletisim.jsx";
import Dgs from "./components/pages/Dgs.jsx";
import Tabanpuan from "./components/pages/Tabanpuan.jsx";
import Tercihrehberi from "./components/pages/Tercihrehberi.jsx";
import Lgs from "./components/pages/Lgs.jsx";
import DgsKonu from "./components/pages/DgsKonu.jsx";
import LgsKonu from "./components/pages/LgsKonu.jsx";
import Ai from "./components/pages/Ai.jsx";
import Akdeniz from "./components/UNIVERSITELER/Akdeniz.jsx";
import AntalyaBilim from "./components/UNIVERSITELER/AntalyaBilim.jsx";
import Akev from "./components/UNIVERSITELER/Akev.jsx";

import AlparslanTurkes from "./components/UNIVERSITELER/AlparslanTurkes.jsx";
import Cukurova from "./components/UNIVERSITELER/Cukurova.jsx";
import Adiyaman from "./components/UNIVERSITELER/Adiyaman.jsx";
import AfyonKocatepe from "./components/UNIVERSITELER/AfyonKocatepe.jsx";
import AlanyaUniversitesi from "./components/UNIVERSITELER/AlanyaUniversitesi.jsx";
import AbdullahGulUni from "./components/UNIVERSITELER/AbdullahGul.jsx";
import AdnanMenderesUniversite from "./components/UNIVERSITELER/AdnanMenderes.jsx";

import Agri from "./components/UNIVERSITELER/Agri.jsx";
import AhiEvran from "./components/UNIVERSITELER/AhiEvran.jsx";
import Aksaray from "./components/UNIVERSITELER/Aksaray.jsx";
import MusAlparslanUni from "./components/UNIVERSITELER/MusAlparslan.jsx";
import Amasya from "./components/UNIVERSITELER/Amasya.jsx";
import AnkaraBilim from "./components/UNIVERSITELER/AnkaraBilim.jsx";
import AnkaraHaci from "./components/UNIVERSITELER/AnkaraHaci.jsx";
import AnkaraJandarma from "./components/UNIVERSITELER/AnkaraJandarma.jsx";
import AnkaraMedipol from "./components/UNIVERSITELER/AnkaraMedipol.jsx";
import AnkaraMuzik from "./components/UNIVERSITELER/AnkaraMuzik.jsx";
import AnkaraSosyalBilim from "./components/UNIVERSITELER/AnkaraSosyalBilim.jsx";
import AnkaraUfuk from "./components/UNIVERSITELER/AnkaraUfuk.jsx";
import AnkaraUni from "./components/UNIVERSITELER/AnkaraUni.jsx";
import ArtvinCoruh from "./components/UNIVERSITELER/ArtvinCoruh.jsx";
import Atilim from "./components/UNIVERSITELER/Atilim.jsx";

import AydinUni1 from "./components/UNIVERSITELER/Aydin.jsx";
import Balıkesir1 from "./components/UNIVERSITELER/Balikesir.jsx";
import Bandırma1 from "./components/UNIVERSITELER/Bandirma.jsx";
import Bartın1 from "./components/UNIVERSITELER/Bartin.jsx";
import Baskent1 from "./components/UNIVERSITELER/Baskent.jsx";
import Batman1 from "./components/UNIVERSITELER/Batman.jsx";

import Bilkent1 from "./components/UNIVERSITELER/Bilkent.jsx";

import Bitlis1 from "./components/UNIVERSITELER/Bitlis.jsx";
import Bogazici1 from "./components/UNIVERSITELER/Bogazici.jsx";
import Bolu1 from "./components/UNIVERSITELER/Bolu.jsx";

import BursaTeknik1 from "./components/UNIVERSITELER/BursaTeknik.jsx";
import BursaUludag1 from "./components/UNIVERSITELER/BursaUludag.jsx";
import Cag1 from "./components/UNIVERSITELER/Cag.jsx";
import Canakkale1 from "./components/UNIVERSITELER/Canakkale.jsx";
import Cankaya1 from "./components/UNIVERSITELER/Cankaya.jsx";
import Cankırı1 from "./components/UNIVERSITELER/CankırıKaratekin.jsx";
import CelalBayer1 from "./components/UNIVERSITELER/Celalbayar.jsx";
import Dicle1 from "./components/UNIVERSITELER/Dicle.jsx";
import DokuzEylul1 from "./components/UNIVERSITELER/DokuzEylul.jsx";

import AvrasyaUniversitesi1 from "./components/UNIVERSITELER/Avrasya.jsx";
import BilecikSeyh from "./components/UNIVERSITELER/BilecikSeyh.jsx";
import BingolUni from "./components/UNIVERSITELER/Bingol.jsx";
import BulentEcevit from "./components/UNIVERSITELER/BulentEcevit.jsx";
import Duczce1 from "./components/UNIVERSITELER/Duzce.jsx";
import Ege1 from "./components/UNIVERSITELER/Ege.jsx";
import Erciyes1 from "./components/UNIVERSITELER/Erciyes.jsx";
import Erzincan1 from "./components/UNIVERSITELER/Erzincan.jsx";
import ErzurumAtatur1 from "./components/UNIVERSITELER/ErzurumAtaturk.jsx";
import ErzurumTeknik1 from "./components/UNIVERSITELER/ErzurumTeknik.jsx";
import Eskisehir1 from "./components/UNIVERSITELER/EskisehirAnadolu.jsx";
import EskisehirOsman1 from "./components/UNIVERSITELER/EskisehirOsmangazi.jsx";

import Firat1 from "./components/UNIVERSITELER/Firat.jsx";
import Galatasaray1 from "./components/UNIVERSITELER/Galatasaray.jsx";
import Gazi1 from "./components/UNIVERSITELER/Gazi.jsx";
import Gaziantep1 from "./components/UNIVERSITELER/Gaziantep.jsx";

import GebzeTeknik1 from "./components/UNIVERSITELER/GebzeTeknik.jsx";

import Hacettepe1 from "./components/UNIVERSITELER/Hacettepe.jsx";

import Hakkari1 from "./components/UNIVERSITELER/Hakkari.jsx";
import Harran1 from "./components/UNIVERSITELER/Harran.jsx";
import HasanKalyoncu1 from "./components/UNIVERSITELER/HasanKalyoncu.jsx";
import HaciBektasVeli from "./components/UNIVERSITELER/HacıBektasVeli.jsx";
import Hitit1 from "./components/UNIVERSITELER/Hitit.jsx";
import HatayMustafa1 from "./components/UNIVERSITELER/HatayMustafa.jsx";
import Inonu1 from "./components/UNIVERSITELER/Inonu.jsx";
import IskenderunTeknik1 from "./components/UNIVERSITELER/IskenderunTeknik.jsx";
import IspartaUygu1 from "./components/UNIVERSITELER/IspartaUygu.jsx";
import IstanbulTeknik1 from "./components/UNIVERSITELER/IstanbulTeknik.jsx";
import IstanbulUni1 from "./components/UNIVERSITELER/IstanbulUni.jsx";
import Istiklal1 from "./components/UNIVERSITELER/Istiklal.jsx";
import IzmirBakircay1 from "./components/UNIVERSITELER/IzmirBakırcay.jsx";
import IzmirYuksek1 from "./components/UNIVERSITELER/IzmirYuksekTek.jsx";
import Kafkas1 from "./components/UNIVERSITELER/Kafkas.jsx";
import Kapadokya1 from "./components/UNIVERSITELER/Kapadokya.jsx";
import Karabuk1 from "./components/UNIVERSITELER/Karabuk.jsx";
import Karaman1 from "./components/UNIVERSITELER/Karaman.jsx";
import Kastamonu1 from "./components/UNIVERSITELER/Kastamonu.jsx";
import KatipCelebi1 from "./components/UNIVERSITELER/KatipCelebi.jsx";
import Katu1 from "./components/UNIVERSITELER/Katu.jsx";
import Kayseri1 from "./components/UNIVERSITELER/Kayseri.jsx";
import Kirklareli1 from "./components/UNIVERSITELER/Kırklareli.jsx";
import Kilis1 from "./components/UNIVERSITELER/Kilis.jsx";
import Kirikkale1 from "./components/UNIVERSITELER/Kirikkale.jsx";
import Kocaeli1 from "./components/UNIVERSITELER/Kocaeli.jsx";
import KonyaGida1 from "./components/UNIVERSITELER/KonyaGida.jsx";
import KonyaTek1 from "./components/UNIVERSITELER/KonyaTeknik.jsx";
import KorkutAta1 from "./components/UNIVERSITELER/KorkutAta.jsx";
import KTO1 from "./components/UNIVERSITELER/KTO.jsx";


import KarabukUni from "./components/UNIVERSITELER/Karabuk.jsx";
import KutahyaDumlu from "./components/UNIVERSITELER/KutahyaDumlu.jsx";
import MalatyaTurgut1 from "./components/UNIVERSITELER/MalatyaTurgut.jsx";
import Mardin1 from "./components/UNIVERSITELER/MardinArtuklu.jsx";
import Marmara1 from "./components/UNIVERSITELER/Marmara.jsx";
import MehmetAkif1 from "./components/UNIVERSITELER/MehmetAkifErsoy.jsx";
import Mersin1 from "./components/UNIVERSITELER/Mersin.jsx";
import MimarSinan1 from "./components/UNIVERSITELER/MimarSinan.jsx";
import Mudanya1 from "./components/UNIVERSITELER/Mudanya.jsx";
import NamıkKemal1 from "./components/UNIVERSITELER/NamikKemal.jsx";
import NecmettinErbakan1 from "./components/UNIVERSITELER/NecmettinErbakan.jsx";
import Nigde1 from "./components/UNIVERSITELER/Nigde.jsx";


import OndokuzMayıs1 from "./components/UNIVERSITELER/OnDokuzMayis.jsx";
import Ordu1 from "./components/UNIVERSITELER/Ordu.jsx";
import Ostim1 from "./components/UNIVERSITELER/OstimTeknik.jsx";
import Pamukkale1 from "./components/UNIVERSITELER/Pamukkale.jsx";
import PolisAkademisi1 from "./components/UNIVERSITELER/PolisAkademesi.jsx";
import RecepTayyip1 from "./components/UNIVERSITELER/RecepTayyip.jsx";
import Sakarya1 from "./components/UNIVERSITELER/Sakarya.jsx";
import SakaryaUygulamali1 from "./components/UNIVERSITELER/SakaryaUygu.jsx";
import Samsun1 from "./components/UNIVERSITELER/Samsun.jsx";
import Sanko1 from "./components/UNIVERSITELER/Sanko.jsx";
import Selcuk1 from "./components/UNIVERSITELER/Selcuk.jsx";
import Sinop1 from "./components/UNIVERSITELER/Sinop.jsx";
import SivasBilim1 from "./components/UNIVERSITELER/SivasBilim.jsx";
import SivasCumhur1 from "./components/UNIVERSITELER/SivasCumhur.jsx";
import SutcuImam1 from "./components/UNIVERSITELER/SutcuImam.jsx";
import Tarsus1 from "./components/UNIVERSITELER/Tarsus.jsx";
import Ted1 from "./components/UNIVERSITELER/Ted.jsx";
import TOBB1 from "./components/UNIVERSITELER/TOBB.jsx";

import Trabzon1 from "./components/UNIVERSITELER/Trabzon.jsx";
import Trakya1 from "./components/UNIVERSITELER/Trakya.jsx";
import Tunceli1 from "./components/UNIVERSITELER/Tunceli.jsx";
import Yıldız1 from "./components/UNIVERSITELER/YildizTeknik.jsx"
import Kırklareli1 from "./components/UNIVERSITELER/YildizTeknik.jsx"

import Duzce1 from "./components/UNIVERSITELER/Duzce.jsx"
import Ayt from "./components/pages/Ayt.jsx";
import Tyt from "./components/pages/Tyt.jsx";
import Dil from "./components/pages/Dil.jsx";
import Obp from "./components/pages/Obp.jsx";
import Privacy from "./components/pages/Privacy.jsx";
import Cerez from "./components/pages/Cerez.jsx";
import Biyoloji1 from "./components/pages/Biyoloji.jsx";
import Cografya from "./components/pages/Cografya.jsx";
import Dilanlatim from "./components/pages/Dilanlatim.jsx";




const App = () => {
  

  return(
  <div>
     
    <div>
        <Navbardeneme/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calculater' element={<Calculater/>} />
        <Route path='/iletisim' element={<İletisim/>} />
        <Route path='/tabanpuan' element={<Tabanpuan/>} />
        <Route path='/dgs' element={<Dgs/>} />
        <Route path='/tercihrehberi' element={<Tercihrehberi/>} />
        <Route path='/lgs' element={<Lgs/>} />
        <Route path='/dgs konuları' element={<DgsKonu/>} />
        <Route path='/lgs konuları' element={<LgsKonu/>} />
        <Route path='/Ai' element={<Ai/>} />
        <Route path='/AkdenizUniversitesi' element={<Akdeniz/>} />
        <Route path='/AntalyaBilimUniversitesi' element={<AntalyaBilim/>} />
        <Route path='/AkevUniversitesi' element={<Akev/>} />
        <Route path='/AlanyaUniversitesi' element={<AlanyaUniversitesi/>} />
        <Route path='/AlparslanTurkes' element={<AlparslanTurkes/>} />
        <Route path='/Cukurova' element={<Cukurova/>} />
        <Route path='/AfyonKocatepe' element={<AfyonKocatepe/>} />
        <Route path='/AbdullahGulUni' element={<AbdullahGulUni/>} />
        <Route path='/AdnanMenderes' element={<AdnanMenderesUniversite/>}/>
        <Route path='/Agri' element={<Agri/>}/>
        <Route path='/AhiEvran' element={<AhiEvran/>}/>
        <Route path='/Aksaray' element={<Aksaray/>}/>
        <Route path='/AlparslanTurkes' element={<MusAlparslanUni/>}/>
        <Route path='/Amasya' element={<Amasya/>}/>
        <Route path='/AnkaraBilimUni' element={<AnkaraBilim/>}/>
        <Route path='/AnkaraHaci' element={<AnkaraHaci/>}/>
        <Route path='/AnkaraJandarma' element={<AnkaraJandarma/>}/>
        <Route path='/AnkaraMedipol' element={<AnkaraMedipol/>}/>
        <Route path='/AnkaraMuzik' element={<AnkaraMuzik/>}/>
        <Route path='/AnkaraSosyal' element={<AnkaraSosyalBilim/>}/>
        <Route path='/AnkaraUfuk' element={<AnkaraUfuk/>}/>
        <Route path='/AnkaraUniversitesi' element={<AnkaraUni/>}/>
        <Route path='/AnkaraYildi' element={<Adiyaman/>}/>
        <Route path='/ArdahanUniversitesi' element={<Adiyaman/>}/>
        <Route path='/Artvin' element={<ArtvinCoruh/>}/>
        <Route path='/AtilimUniversitesi' element={<Atilim/>}/>
        <Route path='/AvrasyaUniversitesi' element={<AvrasyaUniversitesi1/>}/>
        <Route path='/AydinUniversitesi' element={<AydinUni1/>}/>
        <Route path='/BalıkesirUniversitesi' element={<Balıkesir1/>}/>
        <Route path='/BandırmaUniversitesi' element={<Bandırma1/>}/>
        <Route path='/BartınUniversitesi' element={<Bartın1/>}/>
        <Route path='/BaskentUniversitesi' element={<Baskent1/>}/>
        <Route path='/BatmanUniversitesi' element={<Batman1/>}/>
        <Route path='/BilecikSeyhEdebali' element={<BilecikSeyh/>}/>
        <Route path='/Bilkent' element={<Bilkent1/>}/>
        <Route path='/Bingol' element={<BingolUni/>}/>
        <Route path='/Bitlis' element={<Bitlis1/>}/>
        <Route path='/Bogazici' element={<Bogazici1/>}/>
        <Route path='/BoluUniversitesi' element={<Bolu1/>}/>
        <Route path='/BulentEcevitUniversitesi' element={<BulentEcevit/>}/>
        <Route path='/BursaTeknikUniversitesi' element={<BursaTeknik1/>}/>
        <Route path='/BursaUludagUniversitesi' element={<BursaUludag1/>}/>
        <Route path='/CagUniversitesi' element={<Cag1/>}/>
        <Route path='/CanakkaleUni' element={<Canakkale1/>}/>
        <Route path='/Cankaya' element={<Cankaya1/>}/>
        <Route path='/Cankırı' element={<Cankırı1/>}/>
        <Route path='/CelalBayar' element={<CelalBayer1/>}/>
        <Route path='/Dicle' element={<Dicle1/>}/>
        <Route path='/DokuzEylulUniversitesi' element={<DokuzEylul1/>}/>
        <Route path='/DuzceUniversitesi' element={<Duczce1/>}/>
        <Route path='/EgeUniversitesi' element={<Ege1/>}/>
        <Route path='/ErciyesUniversitesi' element={<Erciyes1/>}/>
        <Route path='/ErzincanUniversitesi' element={<Erzincan1/>}/>
        <Route path='/ErzurumAtaturk' element={<ErzurumAtatur1/>}/>
        <Route path='/ErzurumTeknik' element={<ErzurumTeknik1/>}/>
        <Route path='/EskisehirAnadolu' element={<Eskisehir1/>}/>
        <Route path='/EskisehirGazi' element={<EskisehirOsman1/>}/>
        <Route path='/Firat' element={<Firat1/>}/>
        <Route path='/Galatasaray' element={<Galatasaray1/>}/>
        <Route path='/GaziUniversitesi' element={<Gazi1/>}/>
        <Route path='/Gaziantep' element={<Gaziantep1/>}/>
        <Route path='/GebzeTeknik' element={<GebzeTeknik1/>}/>
        <Route path='/Hacettepe' element={<Hacettepe1/>}/>
        <Route path='/HacıBektas' element={<HaciBektasVeli/>}/>
        <Route path='/Hakkari' element={<Hakkari1/>}/>
        <Route path='/Harran' element={<Harran1/>}/>
        <Route path='/HasanKalyoncu' element={<HasanKalyoncu1/>}/>
        <Route path='/HatayMustafa' element={<HatayMustafa1/>}/>
        <Route path='/Hiti' element={<Hitit1/>}/>
        <Route path='/Inonu' element={<Inonu1/>}/>
        <Route path='/IskenderunTeknik' element={<IskenderunTeknik1/>}/>
        <Route path='/IspartaUygulamali' element={<IspartaUygu1/>}/>
        <Route path='/IstanbulTeknik' element={<IstanbulTeknik1/>}/>
        <Route path='/IstanbulUni' element={<IstanbulUni1/>}/>
        <Route path='/Istiklal' element={<Istiklal1/>}/>
        <Route path='/İzmirBakircay' element={<IzmirBakircay1/>}/>
        <Route path='/IzmirYuksekTek' element={<IzmirYuksek1/>}/>
        <Route path='/Kafkas' element={<Kafkas1/>}/>
        <Route path='/Kapadokya' element={<Kapadokya1/>}/>
        <Route path='/Karabuk' element={<KarabukUni/>}/>
        <Route path='/Karaman' element={<Karaman1/>}/>
        <Route path='/Kastamonu1' element={<Kastamonu1/>}/>
        <Route path='/KatipCelebi' element={<KatipCelebi1/>}/>
        <Route path='/Katu' element={<Katu1/>}/>
        <Route path='/Kayseri' element={<Kayseri1/>}/>
        <Route path='/Kirklareli' element={<Kirklareli1/>}/>
        <Route path='/Kilis' element={<Kilis1/>}/>
        <Route path='/Kirikkale' element={<Kirikkale1/>}/>
        <Route path='/Kocaeli' element={<Kocaeli1/>}/>
        <Route path='/KonyaGida' element={<KonyaGida1/>}/>
        <Route path='/KonyaTek' element={<KonyaTek1/>}/>
        <Route path='/KorkutAta' element={<KorkutAta1/>}/>
        <Route path='/KTO' element={<KTO1/>}/>
        <Route path='/KutahyaDumlu' element={<KutahyaDumlu/>}/>
        <Route path='/MalatyaTurgut' element={<MalatyaTurgut1/>}/>
        <Route path='/Mardin' element={<Mardin1/>}/>
        <Route path='/Marmara' element={<Marmara1/>}/>
        <Route path='/MehmetAkifErsoy' element={<MehmetAkif1/>}/>
        <Route path='/Mersin' element={<Mersin1/>}/>
        <Route path='/MimarSinan' element={<MimarSinan1/>}/>
        <Route path='/Mudanya' element={<Mudanya1/>}/>
        <Route path='/NamıkKemal' element={<NamıkKemal1/>}/>
        <Route path='/NecmettinErbakan' element={<NecmettinErbakan1/>}/>
        <Route path='/Nigde' element={<Nigde1/>}/>
        <Route path='/Ondokuzmayıs' element={<OndokuzMayıs1/>}/>
        <Route path='/Ordu' element={<Ordu1/>}/>
        <Route path='/Ostim' element={<Ostim1/>}/>
        <Route path='/Pamukkale' element={<Pamukkale1/>}/>
        <Route path='/PolisAkademisi' element={<PolisAkademisi1/>}/>
        <Route path='/RecepTayyip' element={<RecepTayyip1/>}/>
        <Route path='/Sakarya' element={<Sakarya1/>}/>
        <Route path='/SakaryaUygulamali' element={<SakaryaUygulamali1/>}/>
        <Route path='/Samsun' element={<Samsun1/>}/>
        <Route path='/Sanko' element={<Sanko1/>}/>
        <Route path='/Selcuk' element={<Selcuk1/>}/>
        <Route path='/Sinop' element={<Sinop1/>}/>
        <Route path='/SivasBilim' element={<SivasBilim1/>}/>
        <Route path='/SivasCumhur' element={<SivasCumhur1/>}/>
        <Route path='/SutcuImam' element={<SutcuImam1/>}/>
        <Route path='/Tarsus' element={<Tarsus1/>}/>
        <Route path='/Ted' element={<Ted1/>}/>
        <Route path='/TOBB' element={<TOBB1/>}/>
        <Route path='/Trabzon' element={<Trabzon1/>}/>
        <Route path='/Trakya' element={<Trakya1/>}/>
        <Route path='/Tunceli' element={<Tunceli1/>}/>
        <Route path='/YildizTeknik' element={<Yıldız1/>}/>
        <Route path='/Kirklareli' element={<Kırklareli1/>}/>
       
        <Route path='/Düzce' element={<Duzce1/>}/>
        <Route path='/Ayt' element={<Ayt/>}/>
        <Route path='/Tyt' element={<Tyt/>}/>
        <Route path='/Dil' element={<Dil/>}/>
        <Route path='/Obp' element={<Obp/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Cerezler' element={<Cerez/>}/>
        <Route path='/Biyoloji' element={<Biyoloji1/>}/>
        <Route path='/Cografya' element={<Cografya/>}/>
        <Route path='/dilanlatim' element={<Dilanlatim/>}/>
       
       
      
       

       

       

        
       





       


     
      
       
      </Routes>
    
   
    </div>
    </div>
    
  ) 
}

export default App
