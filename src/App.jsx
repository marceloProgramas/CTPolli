import { useState } from 'react'
import * as S from "./App.js"
import NavBar from './Navbar/Navbar.jsx'
import Main from "./main/Main.jsx"
import Contato from "./Contato/Contato.jsx"
import Treino from './treino/treino.jsx'
import Carosel from "./Contato/Contato.jsx"
import Preco from './Preços/Preco.jsx'

function App() {
  

  return (
    <>
    <S.imagem>
      <S.black> 
      <NavBar id = "NavBar" />
      <Main id = "Main" />
      </S.black>
    </S.imagem>
    <Treino id="Treino"/>
    <Contato id = "Contato"/>
    <Preco />
    <div id='inscricao'/>
    </>
  )
}

export default App
