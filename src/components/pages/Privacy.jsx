import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css'
const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container" style={{ padding: '20px', lineHeight: '1.6' }}>
            <h1>Gizlilik Politikası</h1>
            <p>
                "TercihRehberim", öğrencilere üniversite tercihleri konusunda rehberlik etmek amacıyla
                çerezler kullanmaktadır. Çerezler, web sitemizin daha etkili ve kişiselleştirilmiş
                hizmetler sunmasını sağlamaktadır.
            </p>
            <h2>Çerezlerin Kullanım Amacı</h2>
            <p>
                Web sitemizde çerezler; site performansını ölçme, kullanıcı deneyimini geliştirme ve
                kişiselleştirilmiş içerik ve reklamlar sunma amacıyla kullanılmaktadır. Çerezler sayesinde,
                kullanıcıların site üzerindeki tercihleri kaydedilir ve tekrar ziyaretlerinde
                bu tercihlere göre bir deneyim sunulur.
            </p>
            <h2>Kişisel Verilerin Korunması</h2>
            <p>
                "TercihRehberim", kullanıcılarının kişisel verilerini büyük bir titizlikle korumaktadır.
                Toplanan veriler, yalnızca hizmetlerimizi geliştirmek ve kullanıcı deneyimini zenginleştirmek
                amacıyla kullanılmaktadır. Tüm kişisel veriler, yasal mevzuatlara uygun şekilde işlenmekte
                ve saklanmaktadır.
            </p>
            <h2>Veri Paylaşımı</h2>
            <p>
                Kullanıcılarımızın kişisel verileri, üçüncü partilerle yalnızca yasal yükümlülükler kapsamında
                ve kullanıcı izni ile paylaşılmaktadır. Bu paylaşımlar, kullanıcıların daha iyi bir hizmet
                almasını sağlamak amacıyla yapılmaktadır.
            </p>
            <p>
                Daha fazla bilgi için <Link to="/Cerez">Çerez Politikası</Link> sayfamızı ziyaret edebilirsiniz.
            </p>
            <Link to="/">Anasayfaya Dön</Link>
        </div>
    );
}

export default PrivacyPolicy;
