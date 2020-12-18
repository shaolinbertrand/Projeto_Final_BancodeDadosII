import React , { Component } from 'react';
//import Modal from '@material-ui/core/Modal';
import {   TitleBold  , Header , Equation , Input, TitleBold2, InputPass, InputData} from './styles'



import {
  withRouter
} from 'react-router-dom'

class CadastroUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      username: '',
      senha: '',
      dia:'',
      mes:'',
      ano:''
    }
  }

  onchangeUserName = e => {
    this.setState({ username: e.target.value });
  };
  onchangeNome = e => {
    this.setState({ nome: e.target.value });
  };
  onchangeUserSenha = e => {
    this.setState({ senha: e.target.value });
  };
  onchangeDia = e => {
    this.setState({ dia: e.target.value });
  };
  onchangeMes = e => {
    this.setState({ mes: e.target.value });
  };
  onchangeAno = e => {
    this.setState({ ano: e.target.value });
  };

  async handleSubmit(){
    console.log(this.state.nome)
    console.log(this.state.senha)
    console.log(this.state.username)
    console.log(this.state.ano+"-"+this.state.mes+"-"+this.state.dia)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          "name": this.state.nome,
          "usuario": this.state.username,
          "senha": this.state.senha,
          "birthday":this.state.ano+"-"+this.state.mes+"-"+this.state.dia
        })
    };
    const response = await fetch('http://localhost:3333/users', requestOptions)

    if(response.status === 201){
      this.props.history.push(`/login/`)
    }
   
}


  render(){

      return(
        <div>
         <Header> 
       
      <div>
      <TitleBold>
        Cadastre no aplicativo
        </TitleBold>
        <Input
          placeholder="Nome"
          onChange={this.onchangeNome}
         />
         <Input
          placeholder="username"
          onChange={this.onchangeUserName}
         />
         <Equation>
         <InputData
          placeholder="dia"
          onChange={this.onchangeDia}
         />
          <InputData
          placeholder="mês"
          onChange={this.onchangeMes}
         />
          <InputData
          placeholder="ano"
          onChange={this.onchangeAno}
         />
         </Equation>
         
          <InputPass
          placeholder="senha"
          onChange={this.onchangeUserSenha}
         />
          
       
       <TitleBold2 onClick={() =>this.handleSubmit()}>
        Cadastrar
        </TitleBold2>

       
          
         </div>
         
        
       
         
         
         
         
        
         
        </Header>
        
         </div>
      );   
  }
}


export default withRouter(CadastroUser);
