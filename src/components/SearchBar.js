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
     
    onFormSubmit = (event) => {
        //Intent e enviar el formulario automáticamentey en el proceso actualizen la página
        event.preventDefault();
            // console.log(this.state.term);
            this.props.onSubmit(this.state.term); 

    }

            /*En el instante en que el susuario escribe que ingresa esta función, se llama 
              extraemos el valor actual de la entrada, actualiamos nuestro componente al llamar al state establecido
              Cada vez que llamamos al sate establecido, el compienente se procesará automaticamente, por lo que el método
              de procesamiento aqui se llama por segunda vez en el instatne en que el usuario escribe algo allí
            */
    render(){
        
        return(
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                  <label>Image Search</label>      
                  <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value.toUpperCase()})} /*onClick={this.onInputClick} onChange={this.onInputChange}*//>
               </div> 
            </form>
        </div>
    );
    }
}

export default SearchBar;