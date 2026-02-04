import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer'

import HomePage from './pages/HomePage';
import TentangKami from './pages/TentangKami';
import ProdukKami from './pages/ProdukKami';
import HubungiKami from './pages/HubungiKami';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/tentangkami' element={<TentangKami/>}/>
        <Route path='/produkkami' element={<ProdukKami/>}/>
        <Route path='/hubungi' element={<HubungiKami/>}/>
      </Routes>


      <Footer/>
    </div>
  );
}

export default App;
