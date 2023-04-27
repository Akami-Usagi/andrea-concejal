import './App.css';
import Header from './sections/header/header';
import Banner from './sections/banner/banner';
import About from './sections/about/about';
import Objetive from './sections/objetive/objetive';
import Footer from './sections/footer/footer';

function App() {

  return (
    <div className='main__div'>
      <Header/>
      <section id='banner'>
        <Banner/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='objetive'>
        <Objetive/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    </div>
    
  );
}

export default App;
