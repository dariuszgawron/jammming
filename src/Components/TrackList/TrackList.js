import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        const tracks = this.props.tracks;
        const arrayOfTracks = tracks.map(track=> 
            <Track key={track.id} track={track} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} />
        );
        return (
            <div className="TrackList">
                {arrayOfTracks}
            </div>
        )
    }
}

export default TrackList