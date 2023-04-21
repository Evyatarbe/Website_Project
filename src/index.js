import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Jojo } from './component/Jojo';
import { Juju } from './component/Juju';
import { DemonSlayer } from './component/DemonSlayer';
import { Bleach } from './component/Bleach';
import { DBZ } from './component/DBZ';
import { BlackClover } from './component/BlackClover';
import { OnePiece } from './component/OnePiece';
import { BlueLock } from './component/BlueLock';
import { HxH } from './component/HxH';
import { NotFound } from './component/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/Jojo' element={<Jojo />} />
        <Route path='/Juju' element={<Juju />} />
        <Route path='/DemonSlayer' element={<DemonSlayer />} />
        <Route path='/Bleach' element={<Bleach />} />
        <Route path='/DBZ' element={<DBZ />} />
        <Route path='/BlackClover' element={<BlackClover />} />
        <Route path='/OnePiece' element={<OnePiece />} />
        <Route path='/BlueLock' element={<BlueLock />} />
        <Route path='/HxH' element={<HxH />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
