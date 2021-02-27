
import React, { Component } from 'react';
import api from './api';


class App extends Component{

 state={
   cadastros:[],
 }

 async componentDidMount(){
   const response = await api.get('mediadores');

   //console.log(response.data);

   this.setState({ cadastros: response.data});
 }


  render(){

    const {cadastros}= this.state;

    return(
      <div>
<h2>visitar registros de cadastro</h2>

    {console.log(cadastros)}
    {cadastros.map(cadastro =>(
      <li key={cadastro._id}>
       
          <h4>Nome do mediador:</h4>   {cadastro.nome}
        
         
          <h4>Email: </h4>
          {cadastro.email}
          
          <p>identificacao (id)</p>
          <p>
          {cadastro._id}
          </p>
       

      </li>
    ))}
    </div>
    
    );
  };
};



export default App;
