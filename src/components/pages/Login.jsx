import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username: username,
                password: password
            });
            console.log(response.data);
            // Giriş başarılı mesajı veya yönlendirme burada yapılabilir.
        } catch (error) {
            console.error('Giriş hatası:', error.response.data);
            // Hata durumunda kullanıcıya bir hata mesajı gösterilebilir.
        }
    }

    return (
        <div className="login-container">
            <h1>Giriş Yap</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Kullanıcı Adı:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Şifre:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="actions">
                    <button type="submit">Giriş Yap</button>
                    <a href="/reset-password" style={{ marginLeft: '10px' }}>Şifremi Unuttum</a>
                </div>
            </form>
            <Footer/>
        </div>
    )
}

export default Login;
