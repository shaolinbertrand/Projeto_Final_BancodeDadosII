//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas

import ListJogos from './components/listJogos/index';
import DetailsJogos from './components/jogodetails/index';
import Login from './components/auth/login';
import CriarJogo from './components/auth/criarjogo';
import Cadastro from './components/auth/cadastro';
//Criar o componentes com as rotas
class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login/"exact component={Login} />
                    <Route path="/cadastro/" component={Cadastro} />
                    <Route path="/jogos/" component={ListJogos} />
                    <Route path="/details/:id" component={DetailsJogos} />
                    <Route path="/criar/" component={CriarJogo} />
                </Switch>        
            </BrowserRouter>
        );
    }
   
};

export default Routes;