import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main/App';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SectionOne from './SectionOne/SectionOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <SectionOne />
    <App />
    <Footer />
  </>
);