import './App.css';
import Main from './pages/Main';
import Header from './sections/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PictureModal from './components/PictureModal';

function App() {
  
  const [objetiveData, setObjetiveData] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false); //booleano para definir si el modal esta abierto
  const [banner, setbanner] = useState(true);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = () => {
    setModalIsOpen(true)
  }
  const changeBanner = () => {
    setbanner(!banner)
  }
  

  

  return (
    <Router>
    <Header/>
    <PictureModal objetiveData={objetiveData} isOpen={modalIsOpen} onClose={closeModal} openModal={openModal}/>
    <Routes>
      <Route path='/' element={<Main setObjetiveData={setObjetiveData} openModal={openModal} banner={banner} changeBanner={changeBanner}/>}/>
    </Routes>
  </Router>     
  )
}

export default App;
