import React from 'react';
import { Link } from 'react-router-dom';
import './Cerez.css'
const CookiePolicy = () => {
    return (
        <div className="cookie-policy-container" style={{ padding: '20px', lineHeight: '1.6' }}>
            <h1>Çerez Politikası</h1>
            <p>TercihRehberim olarak, ziyaretçilerimize daha etkili ve kişiselleştirilmiş bir deneyim sunabilmek için çerezler kullanmaktayız.</p>
            <h2>Neden Çerez Kullanıyoruz?</h2>
            <p>Site performansını artırmak, kullanım analizi yapmak, kişiselleştirilmiş reklamlar göstermek ve güvenlik amaçlı önlemler almak için çerezlerden faydalanıyoruz.</p>
            <h2>Çerez Türleri</h2>
            <ul>
                <li><strong>Zorunlu Çerezler:</strong> Siteyi doğru şekilde çalıştırmak için gereklidir.</li>
                <li><strong>Fonksiyonel Çerezler:</strong> Kullanıcı tercihlerini hatırlamak için kullanılır.</li>
                <li><strong>Analitik Çerezler:</strong> Site kullanım istatistiklerini toplamak için kullanılır.</li>
                <li><strong>Reklam Çerezleri:</strong> Kullanıcıya yönelik reklamları kişiselleştirmek için kullanılır.</li>
            </ul>
            <h2>Çerezleri Nasıl Yönetebilirsiniz?</h2>
            <p>Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz; çerezlerin kullanımını kısıtlayabilir veya tamamen engelleyebilirsiniz.</p>
            <h2>Gizlilik</h2>
            <p>Çerez kullanımı, gizlilik politikamızla uyumludur. Daha fazla bilgi için <Link to="/Privacy">Gizlilik Politikamızı</Link> ziyaret edin.</p>
            <Link to="/">Anasayfaya Dön</Link>
        </div>
    );
}

export default CookiePolicy;
