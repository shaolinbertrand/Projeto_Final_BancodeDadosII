import React , { Component } from 'react';
//import Modal from '@material-ui/core/Modal';
import {   TitleBold  , Header , Equation , Input, TitleBold2, InputPass, InputData} from './styles'



import {
  withRouter
} from 'react-router-dom'

class CriarJogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      classificacao: '',
      categoria1: '',
      categoria2:'',
      categoria3:'',
      foto:null
    }
  }


  onchangeNome = e => {
    this.setState({ nome: e.target.value });
  };
  onchangeclassificacao = e => {
    this.setState({ classificacao: e.target.value });
  };
  onchangeCategoria = e => {
    this.setState({ categoria1: e.target.value });
  };
  onchangeCategoria2 = e => {
    this.setState({ categoria2: e.target.value });
  };
  onchangeCategoria3 = e => {
    this.setState({ categoria3: e.target.value });
  };
  onchangeFoto = e => {
    this.setState({ foto: e.target.files[0] });
  };


  async handleSubmit(){
    console.log(this.state.nome)
    console.log(this.state.classificacao)
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          "name": this.state.nome,
          "classificacao": this.state.classificacao,
          'categoria':this.state.categoria1,
          'categoria':this.state.categoria2,
          'categoria':this.state.categoria3,
          'foto':this.state.foto
        })
    };
    const response = await fetch('http://localhost:3001/api/cadastro', requestOptions)

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
        Cadastre um jogo
        </TitleBold>
        <Input
          placeholder="Nome"
          onChange={this.onchangeNome}
         />
         <Input
          placeholder="classificacao"
          onChange={this.onchangeclassificacao}
         />
          <Equation>
         <InputData
          placeholder="categoria 1"
          onChange={this.onchangeCategoria}
         />
          <InputData
          placeholder="categoria 2"
          onChange={this.onchangeCategoria2}
         />
          <InputData
          placeholder="categoria 3"
          onChange={this.onchangeCategoria3}
         />
         <input type='file' id='single'
          onChange={this.onchangeFoto} />
         </Equation>
         
       
       <TitleBold2 onClick={() =>this.handleSubmit()}>
        Criar
        </TitleBold2>

       
          
         </div>
         
        
       
         
         
         
         
        
         
        </Header>
        
         </div>
      );   
  }
}


export default withRouter(CriarJogo);
