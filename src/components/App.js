import { Routes } from "react-router-dom";
// import Quiz from './components/Quiz';
// import Image from './components/Image';
// import ArrayRender from './components/ArrayRender';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

import { Route } from "react-router-dom";
import Main2 from "./Main/Main2";
import Main3 from "./Main/Main3";
import Aboutus from "./Contact/Aboutus";
import Contact from "./Contact/Contact";



function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route index='/' element={<Main />} />
      <Route path="/main2" element={<Main2 />} />
      <Route path="/main3" element={<Main3 />} />
      <Route path="/main3/aboutus" element={<Aboutus />} />
      <Route path="/main3/aboutus/contact" element={<Contact />} />


    </Routes>
  
    <Footer />
    </div>
  );
}

export default App;
