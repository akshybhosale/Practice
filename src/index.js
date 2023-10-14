import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import Image from './components/Image';
import ArrayRender from './components/ArrayRender';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
    <Quiz />
    <Image />
    <ArrayRender />
    </div>
   
  </React.StrictMode>
);
