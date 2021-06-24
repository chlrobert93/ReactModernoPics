import React from 'react';

//Cada vez que alguien cambia el texto dentro de nuestra entrada


//Coponente basado en clase
//Para utilisar state
class SearchBar extends React.Component {
/*
//Definir un nuevo método
   onInputChange(event){
       //Esto contendra el texto que el usuario acaba de agregar a nuestra entrada
      console.log(event.target.value);

   }*/

   //Objec State
    state = { term: ''};


    render(){
        
        return(
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                  <label>Image Search</label>
                  <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})} /*onChange={this.onInputChange}*//>
               </div> 
            </form>
        </div>
    );
    }
}

export default SearchBar;