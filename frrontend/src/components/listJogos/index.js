import React , { Component } from 'react';
import delete_image from './delete.png';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//import Modal from '@material-ui/core/Modal';
import { Title , ContainerSector ,  ProfileD   , Menu , TitleMenuNormal , TitleMenuBold , ContainerUsername     , TitleBold   , DescricaoContainerSector  , Profile , Header , Equation     , TitleContainerSector , DescricaoContainerSector2 , SubTitleContainerSector  } from './styles'
// @material-ui/core components
import GridList from '@material-ui/core/GridList';


import {
  withRouter
} from 'react-router-dom'

class ListJogos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shimmerlist : [0,0,0,0,0,0,0,0,0,0],
      jogos: [],
     
    }
  }

  async componentDidMount() {
    const api = axios.create({
      baseURL: 'http://localhost:3001/api'
    });
    const response = await api.get('jogos');
    this.setState({ jogos: response.data });
  }

  async fetchAllJogos() {
    const api = axios.create({
      baseURL: 'http://localhost:3001/api'
    });
    const response = await api.get('jogos');
    this.setState({ jogos: response.data });
   }


  async handleDetails (e){
    
    this.props.history.push(`/details/${e._id}`)
    };
   
    onchange = e => {
      this.setState({ search: e.target.value });
    };

  render(){
    const { shimmerlist } = this.state;
    const classes = makeStyles(theme => ({
      modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      },
     }));
    

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
         
        <Equation>
       
        <GridList cellHeight={280} cols={6} className={classes.gridList}>
        {this.state.jogos.map(list => (
        <div>
        <ContainerSector  onClick={() =>this.handleDetails(list)} >
       <Profile src={list.foto} />
       <TitleContainerSector >
       {list.name}
       </TitleContainerSector>
      
       <SubTitleContainerSector >
        {list.classificacao}
       </SubTitleContainerSector>
       </ContainerSector>

        </div>
        ))}
      </GridList>
        

        </Equation>
       
        </Header>
         </Equation>
         </div>
        
      );
      
  }

  
  
}


export default withRouter(ListJogos);
