import { useState } from 'react'
import Cabecalho from './components/cabecalho/cabecalho';
import Tabela from './components/tabela/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Tabela />
    </>
  )
}

export default App
