// in order to trigger reducers we need to dispatch actions.
// each action is a function which returns an object containing a type and a payload.
// actions include getting or posting data from a server. CRUD operations.
// actions tell reducers what state to return based on the type.
// by convention types are written in ALL CAPS
// use promise middleware inside our store because requests take time.
import axios from 'axios';

const URL = 'http://localhost:3004';


export function artistList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)   // coming from json server.
        .then(response => {
             return response.data
            })
    return{
        type: 'GET_ARTISTS',
        payload: request
    }
}

export function artistsListAll (){
    const request = axios.get(`${URL}/artists?_limit=6`)
        .then(response => response.data)
    return{
        type: 'GET_ARTISTS_ALL',
        payload: request
    }
}

export function artistDetail (id){
    const request = axios.get(`${URL}/artists?id=${id}`)
    .then(response => response.data)
    return{
        type: 'GET_ARTISTS_DETAIL',
        payload: request
    }
}

export function clearArtistDetail (){
    return{
        type: 'CLEAR_ARTISTS_DETAIL',
        payload: null // clearing the data.
    }
}


