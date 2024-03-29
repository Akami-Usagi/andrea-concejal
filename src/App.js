import './App.css';
import Main from './pages/Main';
import Header from './sections/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PictureModal from './components/PictureModal';
import EventModal from './components/EventModal';

function App() {
  
  const [objetiveData, setObjetiveData] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false); //booleano para definir si el modal esta abierto
  const [eventIsOpen, setEventIsOpen] = useState(true)
  const [banner, setbanner] = useState(true);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const closeEventModal = () => {
    setEventIsOpen(false);
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
    <EventModal isOpen={eventIsOpen} onClose={closeEventModal} openModal={openModal}/>
    <PictureModal objetiveData={objetiveData} isOpen={modalIsOpen} onClose={closeModal} openModal={openModal}/>
    <Routes>
      <Route path='/' element={<Main setObjetiveData={setObjetiveData} openModal={openModal} banner={banner} changeBanner={changeBanner}/>}/>
    </Routes>
  </Router>     
  )
}

export default App;
