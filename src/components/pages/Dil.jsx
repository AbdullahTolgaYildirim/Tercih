import React, { useState } from 'react';
import Footer from '../Footer/Footer';

function HesaplamaSayfasi() {
  const [obpPuan1, setObpPuan1] = useState('');
  const [tytPuan1, setTytPuan1] = useState('');
  const [aytPuan1, setAytPuan1] = useState('');
  const [toplamNet1, setToplamNet1] = useState(null);

  const [obpPuan2, setObpPuan2] = useState('');
  const [tytPuan2, setTytPuan2] = useState('');
  const [aytPuan2, setAytPuan2] = useState('');
  const [toplamNet2, setToplamNet2] = useState(null);

  const obpHesapla = (puan) => {
    return puan * 0.12;
  };

  const tytHesapla = (puan) => {
    return puan * 0.4;
  };

  const aytHesapla = (puan) => {
    return puan * 0.6;
  };

  const handleHesapla1 = () => {
    const obpNet = obpHesapla(parseFloat(obpPuan1));
    const tytNet = tytHesapla(parseFloat(tytPuan1));
    const aytNet = aytHesapla(parseFloat(aytPuan1));

    const toplamNetPuan = obpNet + tytNet + aytNet;

    setToplamNet1(toplamNetPuan);
  };

  const handleHesapla2 = () => {
    const obpNet = obpHesapla(parseFloat(obpPuan2) / 2); // İkinci formda OBP'nin yarısını al
    const tytNet = tytHesapla(parseFloat(tytPuan2));
    const aytNet = aytHesapla(parseFloat(aytPuan2));

    const toplamNetPuan = obpNet + tytNet + aytNet;

    setToplamNet2(toplamNetPuan);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h1>Net Puan Hesaplama 1(İlk kez tercih yapıyorsanız)</h1>
          <div>
            <label>OBP Puanı (0-500): </label>
            <input type="number" value={obpPuan1} onChange={(e) => setObpPuan1(e.target.value)} />
          </div>
          <div>
            <label>TYT Puanı (0-500): </label>
            <input type="number" value={tytPuan1} onChange={(e) => setTytPuan1(e.target.value)} />
          </div>
          <div>
            <label>AYT Puanı (0-500): </label>
            <input type="number" value={aytPuan1} onChange={(e) => setAytPuan1(e.target.value)} />
          </div>
          <button onClick={handleHesapla1} style={buttonStyle}>Hesapla</button>
          {toplamNet1 !== null && <p>Toplam Net Puanınız: {toplamNet1}</p>}
        </div>

        <div>
          <h1>Net Puan Hesaplama 2(Önceki Sene Tercih Yaptıysanız)</h1>
          <div>
            <label>OBP Puanı (0-500): </label>
            <input type="number" value={obpPuan2} onChange={(e) => setObpPuan2(e.target.value)} />
          </div>
          <div>
            <label>TYT Puanı (0-500): </label>
            <input type="number" value={tytPuan2} onChange={(e) => setTytPuan2(e.target.value)} />
          </div>
          <div>
            <label>AYT Puanı (0-500): </label>
            <input type="number" value={aytPuan2} onChange={(e) => setAytPuan2(e.target.value)} />
          </div>
          <button onClick={handleHesapla2} style={buttonStyle}>Hesapla</button>
          {toplamNet2 !== null && <p>Toplam Net Puanınız: {toplamNet2}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Buton stilini buradan ayarlayabilirsiniz
const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '8px',
};

export default HesaplamaSayfasi;