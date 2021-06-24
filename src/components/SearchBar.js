import React from 'react';

//Cada vez que alguien cambia el texto dentro de nuestra entrada


//Coponente basado en clase
//Para utilisar state
class SearchBar extends React.Component {

//Definir un nuevo método
   onInputChange(event){
       //Esto contendra el texto que el usuario acaba de agregar a nuestra entrada
      console.log(event.target.value);

   }



    render(){
        
        return(
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                  <label>Image Search</label>
                  <input type="text"  onChange={e => console.log(e.target.value)}/>
               </div>
            </form>
        </div>
    );
    }
}

export default SearchBar;