import './App.css';
import Main from './pages/Main';
import PictureViewer from './pages/PictureViewer';
import Header from './sections/header/header';
import Footer from './sections/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [picCode, setPicCode] = useState("")
  

  return (
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Main setPicCode={setPicCode}/>}/>
      <Route path='/picview' element={<PictureViewer picCode={picCode}/>}/>
    </Routes>
    <Footer/>
  </Router>     
  )
}

export default App;
