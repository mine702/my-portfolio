import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // 스타일 파일 임포트
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
