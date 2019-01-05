import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { artistDetail, clearArtistDetail } from '../actions';
import {bindActionCreators} from 'redux'; // for binding multiple actions.


class ArtistContainer extends Component {

    
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.artistDetail(id)
    }
    componentWillUnmount(){
        this.props.clearArtistDetail()
    }
    
    render(){
        const artistData = this.props.artists.artistData;
        if(!artistData){ return null}
        else{
            const artist = artistData[0];
            return (
                <div className="artist_view">
                    <div className="artist_background" style={{
                        background:`url(/images/${artist.cover})`
                    }}>
                        <Link to="/">
                            Back home
                        </Link>
                        <div className="name">{artist.name}</div>
                    </div>
                    <div className="artist_description">
                        <p>{artist.bio}</p>
                        <div className="tags">
                            <div>
                                <strong>Style:</strong> {artist.style}
                            </div>
                        </div>
                    </div>
                    <div className="artist_album_list">
                        { artist.albums ? 
                            artist.albums.map( item =>(
                            <div key={item.cover} className="albums">
                                <div className="cover" style={{
                                    background:`url(/images/albums/${item.cover})`
                                }}>
                                </div>
                                    
                            </div>
                        ))
                        :null
                    }
                    </div>
                </div>
            );
        }
        
    }
};

// put the actions (as functions) and the state inside the props.
const mapStateToProps = (state) =>{
    return{
        artists:state.artists
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        artistDetail,
        clearArtistDetail
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistContainer);