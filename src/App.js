import estilo from './assets/css/Estilo.module.css'
import Topo from './assets/parts/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Filme from './pages/Filme'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className={estilo.app}>
      <Topo />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/filme' element={<Filme />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;