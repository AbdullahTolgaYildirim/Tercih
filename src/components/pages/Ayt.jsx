import NavbarDeneme from '../NavbarDeneme'
import Footer from '../Footer/Footer'
import React, { useState } from "react";

function TercihRobotu() {
  const [liseDiplomaPuani, setLiseDiplomaPuani] = useState(0);
  const [tytPuani, setTytPuani] = useState(0);
  const [turkDiliEdebiyatiDogru, setTurkDiliEdebiyatiDogru] = useState(0);
  const [turkDiliEdebiyatiYanlis, setTurkDiliEdebiyatiYanlis] = useState(0);
  const [tarih1Dogru, setTarih1Dogru] = useState(0);
  const [tarih1Yanlis, setTarih1Yanlis] = useState(0);
  const [cografya1Dogru, setCografya1Dogru] = useState(0);
  const [cografya1Yanlis, setCografya1Yanlis] = useState(0);
  const [tarih2Dogru, setTarih2Dogru] = useState(0);
  const [tarih2Yanlis, setTarih2Yanlis] = useState(0);
  const [cografya2Dogru, setCografya2Dogru] = useState(0);
  const [cografya2Yanlis, setCografya2Yanlis] = useState(0);
  const [felsefeDogru, setFelsefeDogru] = useState(0);
  const [felsefeYanlis, setFelsefeYanlis] = useState(0);
  const [dinDogru, setDinDogru] = useState(0);
  const [dinYanlis, setDinYanlis] = useState(0);
  const [matematikDogru, setMatematikDogru] = useState(0);
  const [matematikYanlis, setMatematikYanlis] = useState(0);
  const [fizikDogru, setFizikDogru] = useState(0);
  const [fizikYanlis, setFizikYanlis] = useState(0);
  const [kimyaDogru, setKimyaDogru] = useState(0);
  const [kimyaYanlis, setKimyaYanlis] = useState(0);
  const [biyolojiDogru, setBiyolojiDogru] = useState(0);
  const [biyolojiYanlis, setBiyolojiYanlis] = useState(0);
  const [dilDogru, setDilDogru] = useState(0);
  const [dilYanlis, setDilYanlis] = useState(0);

  // Toplam net hesaplama fonksiyonu
  const hesaplaToplamNet = () => {
    const turkDiliEdebiyatiNet = turkDiliEdebiyatiDogru - turkDiliEdebiyatiYanlis * 0.25;
    const tarih1Net = tarih1Dogru - tarih1Yanlis * 0.25;
    const cografya1Net = cografya1Dogru - cografya1Yanlis * 0.25;
    const tarih2Net = tarih2Dogru - tarih2Yanlis * 0.25;
    const cografya2Net = cografya2Dogru - cografya2Yanlis * 0.25;
    const felsefeNet = felsefeDogru - felsefeYanlis * 0.25;
    const dinNet = dinDogru - dinYanlis * 0.25;
    const matematikNet = matematikDogru - matematikYanlis * 0.25;
    const fizikNet = fizikDogru - fizikYanlis * 0.25;
    const kimyaNet = kimyaDogru - kimyaYanlis * 0.25;
    const biyolojiNet = biyolojiDogru - biyolojiYanlis * 0.25;
    const dilNet = dilDogru - dilYanlis * 0.25;
    

    return {
      turkDiliEdebiyatiNet,
      tarih1Net,
      cografya1Net,
      tarih2Net,
      cografya2Net,
      felsefeNet,
      dinNet,
      matematikNet,
      fizikNet,
      kimyaNet,
      biyolojiNet,
      dilNet
    };
  };

  const toplamSosyalBilimler1Net = turkDiliEdebiyatiDogru + tarih1Dogru + cografya1Dogru;
  const toplamSosyalBilimler2Net = tarih2Dogru + cografya2Dogru + felsefeDogru + dinDogru;
  const toplamMatematikNet = matematikDogru - matematikYanlis * 0.25;
  const toplamFenBilimleriNet = fizikDogru + kimyaDogru + biyolojiDogru - (fizikYanlis + kimyaYanlis + biyolojiYanlis) * 0.25;
  const toplamDilNet = dilDogru - dilYanlis * 0.25;

  return (
    <div>
      <h2>Üniversite Tercih Robotu</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Lise Diploma Puanı:{" "}
              <input
                type="number"
                value={liseDiplomaPuani}
                onChange={(e) => setLiseDiplomaPuani(parseInt(e.target.value))}
                style={{ width: "50px" }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              TYT Puanı:{" "}
              <input
                type="number"
                value={tytPuani}
                onChange={(e) => setTytPuani(parseInt(e.target.value))}
                style={{ width: "50px" }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Türk Dili ve Edebiyatı / Sosyal Bilimler-1 (40 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Türk Dili ve Edebiyatı (24 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={turkDiliEdebiyatiDogru}
                onChange={(e) => setTurkDiliEdebiyatiDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={turkDiliEdebiyatiYanlis}
                onChange={(e) => setTurkDiliEdebiyatiYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Türk Dili ve Edebiyatı Net: {turkDiliEdebiyatiDogru - turkDiliEdebiyatiYanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Tarih-1 (10 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={tarih1Dogru}
                onChange={(e) => setTarih1Dogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={tarih1Yanlis}
                onChange={(e) => setTarih1Yanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Tarih Net: {tarih1Dogru - tarih1Yanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Coğrafya-1 (6 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={cografya1Dogru}
                onChange={(e) => setCografya1Dogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={cografya1Yanlis}
                onChange={(e) => setCografya1Yanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Coğrafya Net: {cografya1Dogru - cografya1Yanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Sosyal Bilimler-2 (40 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Tarih-2 (11 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={tarih2Dogru}
                onChange={(e) => setTarih2Dogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={tarih2Yanlis}
                onChange={(e) => setTarih2Yanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Tarih-2 Net: {tarih2Dogru - tarih2Yanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Coğrafya-2 (11 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={cografya2Dogru}
                onChange={(e) => setCografya2Dogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={cografya2Yanlis}
                onChange={(e) => setCografya2Yanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Coğrafya-2 Net: {cografya2Dogru - cografya2Yanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Felsefe Grubu (12 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={felsefeDogru}
                onChange={(e) => setFelsefeDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={felsefeYanlis}
                onChange={(e) => setFelsefeYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Felsefe Grubu Net: {felsefeDogru - felsefeYanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Din Kültürü ve Ahlak Bilgisi (6 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={dinDogru}
                onChange={(e) => setDinDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={dinYanlis}
                onChange={(e) => setDinYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Din Kültürü Net: {dinDogru - dinYanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Matematik (40 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={matematikDogru}
                onChange={(e) => setMatematikDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={matematikYanlis}
                onChange={(e) => setMatematikYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Matematik Net: {matematikDogru - matematikYanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Fen Bilimleri (40 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Fizik(14 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru</label>
              <input
                type="number"
                value={fizikDogru}
                onChange={(e) => setFizikDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={fizikYanlis}
                onChange={(e) => setFizikYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Fizik Net: {fizikDogru - fizikYanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Kimya(13 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={kimyaDogru}
                onChange={(e) => setKimyaDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={kimyaYanlis}
                onChange={(e) => setKimyaYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Kimya Net: {kimyaDogru - kimyaYanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Biyoloji(13 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={biyolojiDogru}
                onChange={(e) => setBiyolojiDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={biyolojiYanlis}
                onChange={(e) => setBiyolojiYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Biyoloji Net: {biyolojiDogru - biyolojiYanlis * 0.25}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="4">
              <h3>Yabancı Dil(80 Soru)</h3>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Doğru:</label>
              <input
                type="number"
                value={dilDogru}
                onChange={(e) => setDilDogru(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <label>Yanlış:</label>
              <input
                type="number"
                value={dilYanlis}
                onChange={(e) => setDilYanlis(parseInt(e.target.value))}
                style={{ marginLeft: "5px" }}
              />
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }} colSpan="2">
              Yabancı Dil Net: {dilDogru - dilYanlis * 0.25}
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Sonuçlar</h2>
      <h2>! Bu bölümde ayt sınavında yaptığınız netlerin 500 puan üzerinden kaç puan olduğunu göreceksiniz! </h2>
      <h1>! Eğer Sözel soruları çözdüyseniz Türk Edebiyatı ve Sosyal Bilimler-1 bölümlerine yaptığınız netleri giriniz! </h1>
      <h1>! Eğer Sayısal soruları çözdüyseniz Matematik ve Fen Bilimleri bölümlerine yaptığınız netleri giriniz! </h1>
      <h1>! Eğer Eşit ağırlık soruları çözdüyseniz Matematik ve Türk Edebiyatı ve Sosyal Bilimler-1 bölümlerine yaptığınız netleri giriniz! </h1>
      <h1>! Eğer Dil soruları çözdüyseniz sadece Dil bölümüne yaptığınız netleri giriniz! </h1>
      
      <p>
        Toplam Netler:{" "}
        {hesaplaToplamNet().turkDiliEdebiyatiNet +
          hesaplaToplamNet().tarih1Net +
          hesaplaToplamNet().cografya1Net +
          hesaplaToplamNet().tarih2Net +
          hesaplaToplamNet().cografya2Net +
          hesaplaToplamNet().felsefeNet +
          hesaplaToplamNet().dinNet +
          hesaplaToplamNet().matematikNet +
          hesaplaToplamNet().fizikNet +
          hesaplaToplamNet().kimyaNet +
          hesaplaToplamNet().biyolojiNet +
          hesaplaToplamNet().dilNet}
      </p>
      <p>Toplam Sosyal Bilimler-1 Net: {toplamSosyalBilimler1Net}</p>
      <p>Toplam Sosyal Bilimler-2 Net: {toplamSosyalBilimler2Net}</p>
      <p>Toplam Matematik Net: {toplamMatematikNet}</p>
      <p>Toplam Fen Bilimleri Net: {toplamFenBilimleriNet}</p>
      <p>Toplam Dil Net: {toplamDilNet}</p>
      <p>Toplam Puan: {(hesaplaToplamNet().turkDiliEdebiyatiNet + hesaplaToplamNet().tarih1Net + hesaplaToplamNet().cografya1Net + hesaplaToplamNet().tarih2Net + hesaplaToplamNet().cografya2Net + hesaplaToplamNet().felsefeNet + hesaplaToplamNet().dinNet + hesaplaToplamNet().matematikNet + hesaplaToplamNet().fizikNet + hesaplaToplamNet().kimyaNet + hesaplaToplamNet().biyolojiNet + hesaplaToplamNet().dilNet) * 6.25}</p>

      <NavbarDeneme />
      <Footer />
    </div>
  );
}

export default TercihRobotu;