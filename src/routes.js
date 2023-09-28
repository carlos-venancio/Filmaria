// Serve para gestão interna do conteudo do site

import React from 'react'
import Header from './components/Header/index'
// o que é isso
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Erro from './pages/Erro'
import Filme from './pages/Filme'

// configura o que acontece caso o usuario coloque determinada rota sem usar o link

const Routes = () => {
    return (
        <BrowserRouter>
            {/* Renderiza o header em todas as telas */}
            <Header/>
            {/* torna o conteudo do site flexivel */}
            <Switch>
                {/* Configura exatamente o que aparece (o componente) caso o usuario digite a rota (excat path) */}
                <Route exact path='/' component={Home}/>
                {/* : indica que é variavel */}
                <Route exact path='/filme/:id' component={Filme}/>
                <Route exact path='/favoritos' component={Favoritos}/>
                <Route exact path='*' component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;