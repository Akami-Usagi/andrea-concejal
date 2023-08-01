import React from 'react';
import Banner from '../sections/banner/banner';
import About from '../sections/about/about';
import Objetive from '../sections/objetive/objetive';
import Footer from '../sections/footer/footer';


export default function Main({setObjetiveData, openModal, banner, changeBanner}){

    
  

    return(
    <div className='main__div'>
      <section id='banner'>
        <Banner banner={banner} changeBanner={changeBanner}/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='objetive'>
        <Objetive setObjetiveData={setObjetiveData} openModal={openModal}/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    </div>
    )
}