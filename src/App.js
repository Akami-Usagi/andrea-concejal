import './App.css';
import Header from './sections/header/header';
import Banner from './sections/banner/banner';
import About from './sections/about/about';

function App() {
  return (
    <div className='main__div'>
      <Header/>
      <Banner/>
      <About/>
    </div>
    
  );
}

export default App;
