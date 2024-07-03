import React, { useState } from "react";
import NavbarDeneme from "../NavbarDeneme";
import Footer from "../Footer/Footer";

function TercihRobotu() {
  const [liseDiplomaPuani, setLiseDiplomaPuani] = useState(0);
  const [turkceDogru, setTurkceDogru] = useState(0);
  const [turkceYanlis, setTurkceYanlis] = useState(0);
  const [matematikDogru, setMatematikDogru] = useState(0);
  const [matematikYanlis, setMatematikYanlis] = useState(0);
  const [sosyalDogru, setSosyalDogru] = useState(0);
  const [sosyalYanlis, setSosyalYanlis] = useState(0);
  const [fenDogru, setFenDogru] = useState(0);
  const [fenYanlis, setFenYanlis] = useState(0);

  // Toplam net hesaplama fonksiyonu
  const hesaplaToplamNet = () => {
    const turkceNet = turkceDogru - turkceYanlis * 0.25;
    const matematikNet = matematikDogru - matematikYanlis * 0.25;
    const sosyalNet = sosyalDogru - sosyalYanlis * 0.25;
    const fenNet = fenDogru - fenYanlis * 0.25;

    const toplamNet =
      turkceNet > 0 && matematikNet > 0 && sosyalNet > 0 && fenNet > 0
        ? turkceNet + matematikNet + sosyalNet + fenNet
        : 0;

    return toplamNet;
  };

  // 120 soru için puan hesaplama fonksiyonu
  const hesaplaPuan = () => {
    const toplamDogru = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
    const toplamYanlis = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
    const toplamSoru = toplamDogru + toplamYanlis;
    const soruBasinaPuan = 500 / 120; // Soru başına düşen puan
    const netPuan = toplamDogru - toplamYanlis * 0.25;
    const puan = soruBasinaPuan * netPuan;
    return puan;
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ marginBottom: "20px" }}>Üniversite Tercih Robotu</h2>
      <div style={{ width: "50%", maxWidth: "600px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h3>Türkçe (40 soru)</h3>
          <label>Doğru:</label>
          <input
            type="number"
            value={turkceDogru}
            onChange={(e) => setTurkceDogru(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <label>Yanlış:</label>
          <input
            type="number"
            value={turkceYanlis}
            onChange={(e) => setTurkceYanlis(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <p>Türkçe Net: {turkceDogru - turkceYanlis * 0.25}</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3>Matematik (40 soru)</h3>
          <label>Doğru:</label>
          <input
            type="number"
            value={matematikDogru}
            onChange={(e) => setMatematikDogru(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <label>Yanlış:</label>
          <input
            type="number"
            value={matematikYanlis}
            onChange={(e) => setMatematikYanlis(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <p>Matematik Net: {matematikDogru - matematikYanlis * 0.25}</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3>Sosyal Bilimler (20 soru)</h3>
          <label>Doğru:</label>
          <input
            type="number"
            value={sosyalDogru}
            onChange={(e) => setSosyalDogru(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <label>Yanlış:</label>
          <input
            type="number"
            value={sosyalYanlis}
            onChange={(e) => setSosyalYanlis(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <p>Sosyal Bilimler Net: {sosyalDogru - sosyalYanlis * 0.25}</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3>Fen Bilimleri (20 soru)</h3>
          <label>Doğru:</label>
          <input
            type="number"
            value={fenDogru}
            onChange={(e) => setFenDogru(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <label>Yanlış:</label>
          <input
            type="number"
            value={fenYanlis}
            onChange={(e) => setFenYanlis(parseInt(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
          <p>Fen Bilimleri Net: {fenDogru - fenYanlis * 0.25}</p>
        </div>
        <p style={{ textAlign: "right", fontSize: "1.2em" }}>
          Toplam Net: {hesaplaToplamNet()}
        </p>
        <p style={{ textAlign: "right", fontSize: "1.2em" }}>
          500 Puan: {hesaplaPuan()}
        </p>
      </div>
    </div>
  );
}

const Tyt = () => {
  return (
    <div>
      <TercihRobotu />
      <Footer className="footer" /> {/* Footer'a class ekledik */}
    </div>
  );
};

export default Tyt;