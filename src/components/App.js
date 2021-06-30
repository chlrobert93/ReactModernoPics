import React from 'react';
import axios from 'axios';  
import SearchBar from './SearchBar';


//Compontente funcional

class App extends React.Component{
    state = {images: []};
    async onSearchSubmit(term){
        //console.log(term);
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term},
            headers:{
                Authorization: 'Client-ID 5oqc8HyEuFhq638lSaWw2hQte46HHdWER-3oe9F4cLs',
 
            }
        });

        console.log(this);
        this.setState({images: response.data.results});
        console.log(response.data.results);
    }
    render(){

    return( 
       <div className="ui container" style={{marginTop: '10px'}}>
           <SearchBar  onSubmit={this.onSearchSubmit}/>
           Found: {this.state.images.length} images
        </div>);
    }
}


export default App;