import React , { Component } from 'react';
import axios from 'axios';
import delete_image from './delete.png';

//import Modal from '@material-ui/core/Modal';
import {SubTitleContainerSector, TitleContainerSector , ProfileD , Equation , Menu , TitleMenuNormal , TitleMenuBold , Header , ContainerSector , Profile} from './styles'
// @material-ui/core components


import {
  withRouter
} from 'react-router-dom'

class DetailsJogos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      jogo: null,
     
    }
  }

  async componentDidMount() {
    const api = axios.create({
      baseURL: 'http://localhost:3001/api/'
    });
    const response = await api.get('jogo/'+this.state.id);
    this.setState({ jogo: response.data });
  }

  async handleDelete (e){
    const requestOptions ={
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    };
     const response = await fetch('http://localhost:3001/api/jogo/'+e._id,requestOptions)
     if(response.status == 200){
        this.props.history.push(`/jogos/`)
     };
    };
   
    onchange = e => {
      this.setState({ search: e.target.value });
    };

  render(){
      return(
        <div>
         <Equation>
         
         <Menu>
        <TitleMenuNormal>
       Game 
        </TitleMenuNormal>
        <TitleMenuBold>
       Store
        </TitleMenuBold>
        </Menu>
        
         <Header>
         <div>
        {this.state.jogo != null ?
         <ContainerSector  >
          <Profile src={this.state.jogo.foto} />
          <TitleContainerSector >
            {this.state.jogo.name}
          </TitleContainerSector>
          {this.state.jogo.categoria.map(categoria => (
        <SubTitleContainerSector >
         {categoria}
        </SubTitleContainerSector>
         )
         )} 
        <SubTitleContainerSector >
         {this.state.jogo.classificacao}
        </SubTitleContainerSector>
        <ProfileD onClick={() =>this.handleDelete()} src={delete_image} />
       </ContainerSector> :
        <SubTitleContainerSector >
        carregando
       </SubTitleContainerSector>
        } 
       

        </div>
       
        </Header>
         </Equation>
         </div>
        
      );
      
  }

  
  
}


export default withRouter(DetailsJogos);
