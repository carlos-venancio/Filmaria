import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import Artigo from './pages/Artigo'
import NotFound from './pages/NotFound'
import Categoria from './pages/Categoria'

// gerenciamento interno das "páginas"
export default function Rotas() {
    return (
        <BrowserRouter>
        {/* configuração do caminho das 4 páginas */}
            <Routes>
                <Route exact path="/:category" Component={Categoria}/>
                <Route exact path="/:category/:title" Component={Artigo}/>
                <Route exact path="/" Component={Home}/>
                <Route exact path="*" Component={NotFound}/>
            </Routes>
        </BrowserRouter>
    )
}