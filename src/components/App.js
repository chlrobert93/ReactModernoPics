import React from 'react';
import axios from 'axios';  
import SearchBar from './SearchBar';


//Compontente funcional

class App extends React.Component{
    onSearchSubmit(term){
        //console.log(term);
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term},
            headers:{
                Authorization: 'Client-ID 5oqc8HyEuFhq638lSaWw2hQte46HHdWER-3oe9F4cLs',
 
            }

        });
    }
    render(){

    return( 
       <div className="ui container" style={{marginTop: '10px'}}>
           <SearchBar  onSubmit={this.onSearchSubmit}/>
        </div>);
    }
}


export default App;