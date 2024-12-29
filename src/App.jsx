import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"

import Contato from './components/Contato'
import Produtos from './components/Produtos'
import Produto from './components/Produto'
import Header from './components/Header'
import Footer from './components/Footer'
import Page404 from './components/Page404'

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path='produto/:id' element={<Produto />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
