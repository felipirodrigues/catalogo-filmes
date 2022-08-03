import { useEffect, useState } from 'react';
import estilo from '../assets/css/Estilo.module.css'
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import LoadFilmes from '../components/CarregarFilmes'

const Home = () => {
  const [catalogo, setCatalogo] = useState([])
  const [carregando, setCarregando] = useState(false)
  
  return (

    <div>
        <LoadFilmes args="NTI" />
        {/* {carregando &&
          <div>Carregando...</div>
        } */}

          {/* {!carregando && catalogo.length>0 && */}
          {/* <div className={estilo.lista}>
            {catalogo.map(
              (item) => (
                <div className={estilo.item}>
                  <div className={estilo.avatar}>
                    <Link to='/filme'>
                      <img src={item.avatar} alt=''/>
                    </Link>
                  </div>
                  <div className={estilo.titulo}>
                    <Link to='/filme'>
                      {item.titulo}<br/>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div> */}
        
    </div>
  )
}
export default Home;