import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 5oqc8HyEuFhq638lSaWw2hQte46HHdWER-3oe9F4cLs',

    }
})