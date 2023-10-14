import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import Img from './components/img';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
    <Quiz />
    <Img />
    </div>
   
  </React.StrictMode>
);
