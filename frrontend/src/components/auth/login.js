import React , { Component } from 'react';
//import Modal from '@material-ui/core/Modal';
import {   TitleBold  , Header  , Input, TitleBold2, InputPass} from './styles'



import {
  withRouter
} from 'react-router-dom'

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      senha: '',
    }
  }
  forCadastro() {
    this.props.history.push(`/cadastro/`)
  }

  
  onchangeNome = e => {
    this.setState({ nome: e.target.value });
  };
  onchangeUserSenha = e => {
    this.setState({ senha: e.target.value });
  };

  async handleSubmit(){
    console.log(this.state.nome)
    console.log(this.state.senha)

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},

    };
    const response = await fetch('http://localhost:3333/login?usuario='+this.state.nome+'&senha='+this.state.senha, requestOptions)

    if(response.status === 200){
      this.props.history.push(`/jogos/`)
    }
   
}

  render(){

      return(
        <div>
         <Header> 
       
      <div>
      <TitleBold>
        Entre no aplicativo
        </TitleBold>
        
         <Input
          placeholder="username"
          onChange={this.onchangeNome}
         />
          <InputPass
          placeholder="senha"
          onChange={this.onchangeUserSenha}
         />
       
       <TitleBold2 onClick={() =>this.handleSubmit()}>
        Entrar
        </TitleBold2>

        <TitleBold2 onClick={() => this.forCadastro()}>
        Cadastro
        </TitleBold2>
          
         </div>
         
        
       
         
         
         
         
        
         
        </Header>
        
         </div>
      );   
  }
}


export default withRouter(LoginUser);
