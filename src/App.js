import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';




function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
     <Header></Header>
      
     
    </div>
  );
}

export default App;
