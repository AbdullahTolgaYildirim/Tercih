import React, { useState } from "react";
import NavbarDeneme from "../NavbarDeneme";
import Footer from "../Footer/Footer";

const Obp = () => {
  const [diplomaNotu, setDiplomaNotu] = useState("");
  const [basariPuani, setBasariPuani] = useState("");

  const handleDiplomaNotuChange = (e) => {
    const value = e.target.value;
    setDiplomaNotu(value);
    let obp = 0;
    if (value && !isNaN(value) && value.charAt(0) !== ".") {
      const diplomaNotuValue = parseFloat(value);
      obp = diplomaNotuValue * 5; // Notu 5 ile çarp
    }
    setBasariPuani(obp.toFixed(2)); // OBP'yi doğrudan not ile çarparak hesapla
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!basariPuani) {
      alert("Ortalama Başarı Puanınız Boş Olamaz");
      return;
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "80%", maxWidth: "600px", marginBottom: "40px" }}>
        <div
          className="obp-notu-panel"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <h1>ORTALAMA BAŞARI PUANI</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="diplomaNotu">Diploma Notunu Yazın (0-100):</label>
              <input
                type="text"
                id="diplomaNotu"
                value={diplomaNotu}
                onChange={handleDiplomaNotuChange}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="basariPuani">
                Ortaöğretim Başarı Puanınız(OBP):
              </label>
              <input
                type="text"
                id="basariPuani"
                value={basariPuani}
                readOnly
              />
            </div>
            <p className="not">Not : OBP sınav sonucunuza eklenecek puandır.</p>
            <button
              type="submit"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "5px",
                float: "right",
              }}
            >
              OBP EKLE
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  transition: "background-color 0.3s",
                  pointerEvents: "none",
                }}
              ></div>
            </button>
          </form>
        </div>
      </div>
      <Footer className="footer" /> {/* Footer'a class ekledik */}
    </div>
  );
};

export default Obp;