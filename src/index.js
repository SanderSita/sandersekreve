import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, useNavigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div id='main-div' className='w-full lg:p-11 p-0 flex flex-col'>
        <div className='bg-black border border-1 border-[#252625] rounded-md flex flex-col flex-1 relative'>
          <Navbar />
          <App />
          <Footer />
        </div>
      </div>
    </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
