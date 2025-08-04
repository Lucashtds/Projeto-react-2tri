import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import CalcularDesconto from './Components/CalcularDesconto';
import Contato from './Components/Contato';
import Produto from './Components/Produtos';
import ListarProduto from './Components/Produtos/listarProduto.js'
import Footer from './Components/Footer';
import Erro from './Components/Erro/index.js';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <section>
            <Routes>
              <Route path='*' element={<Erro />} />
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/produtos' element={<Produto />}/>
              <Route path='/contato' element={<Contato />}/>
              <Route path="/listarProduto/:id" element={<ListarProduto />} />
              <Route path='/calcularDesconto' 
              element={<CalcularDesconto valorCompra="1500" porcentagem="10" pagamento ="1"/>} />
            </Routes>
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;