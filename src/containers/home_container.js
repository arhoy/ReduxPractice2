import React, { Component } from 'react';

import Search from '../components/search';
import Artistlist from '../components/artistlist';
import { connect } from 'react-redux';
import { artistsListAll, artistList } from '../actions';
import {bindActionCreators} from 'redux'; // for binding multiple actions.

class HomeContainer extends Component { 

    componentWillMount() {
        this.props.artistsListAll();
    }


    getKeywords = (event) => {
        let key = event.target.value;

        console.log(key)
        this.props.artistList(key);
    }

    render(){
        console.log(this.props);
        const artists = this.props.artists.artistList;
        return (
            <div>
                <Search keywords={this.getKeywords}/> 
                <Artistlist artists={artists}/>
            </div>
        )
    }
    
}

// put the actions (as functions) and the state inside the props.
const mapStateToProps = (state) =>{
    return{
        artists:state.artists
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        artistsListAll,
        artistList
    
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);