import React ,  {useEffect, useState } from 'react';

const LoadFilmes = ({args}) => {
  const [catalogo, setCatalogo] = useState([])
  const [carregando, setCarregando] = useState(false)

  useEffect(
    () =>{carregarFilmes()},
    []
  )

  const carregarFilmes = async () => {
    setCarregando(true)
    let resposta = await fetch('https://api.b7web.com.br/cinema/');
    let lista = await resposta.json();
    setCatalogo(lista);
    setCarregando(false)
  }
  return(
    <div>{args}</div>
  )
}
export default LoadFilmes;