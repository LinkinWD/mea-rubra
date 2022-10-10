import {Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Koirani from './pages/Koirani';

import Koti from './pages/Koti';
import Kuvia from './pages/Kuvia';
import Minusta from './pages/Minusta';
import Pentueet from './pages/Pentueet';
import Pentuja from './pages/Pentuja';
import Yhteytta from './pages/Yhteytta';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Koti/>}/>
        <Route path='koirani' element={<Koirani/>}/>
        <Route path='minusta' element={<Minusta/>}/>
        <Route path='kuvia' element={<Kuvia/>}/>
        <Route path='pentuja' element={<Pentuja/>}/>
        <Route path='pentueet' element={<Pentueet/>}/>
        <Route path='yhteytta' element={<Yhteytta/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
