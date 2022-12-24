import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.scss';
import Home from './pages/Home/Home';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './Context/CartContext';


const firebaseConfig = {
  apiKey: "AIzaSyBqqZy_lNhMABGLRRcS902-CjM2OrbqX5Q",
  authDomain: "ecommerce-biblioteca.firebaseapp.com",
  projectId: "ecommerce-biblioteca",
  storageBucket: "ecommerce-biblioteca.appspot.com",
  messagingSenderId: "569298129409",
  appId: "1:569298129409:web:2da93b979ffea40c2fe600",
  measurementId: "G-968NKNDLBS"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Home />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
