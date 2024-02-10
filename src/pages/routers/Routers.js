import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './Sobre';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Login from './Login';
import Produto from './Produto/Produto';
import ProdutoAvaliacao from './Produto/ProdutoAvaliacao';
import ProdutoDescricao from './Produto/ProdutoDescricao';
import ProdutoCustomizado from './Produto/ProdutoCustomizado';

const Routers = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="login" element={<Login />} />
            <Route path="produto/:id/*" element={<Produto />} >
                <Route path="" element={<ProdutoDescricao />} />
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                <Route path="customizado" element={<ProdutoCustomizado />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers