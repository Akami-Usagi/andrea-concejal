import React from 'react';

import Banner from '../sections/banner/banner';
import About from '../sections/about/about';
import Objetive from '../sections/objetive/objetive';

import PictureModal from '../components/PictureModal';
import { useState } from 'react';

export default function Main({setPicCode}){

    const [modalIsOpen, setModalIsOpen] = useState(true); //booleano para definir si el modal esta abierto
    const closeModal = () => {
    setModalIsOpen(false);
  };
  

    return(
    <div className='main__div'>
      {/*<PictureModal isOpen={modalIsOpen} onClose={closeModal} setPicCode={setPicCode}/>*/}
      <section id='banner'>
        <Banner/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='objetive'>
        <Objetive/>
      </section>
    </div>
    )
}