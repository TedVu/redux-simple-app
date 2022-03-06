import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.songs.map((song) => {
            return <li>{song.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// connect returns a function and invoke a function
// A very interesting syntax
export default connect(mapStateToProps)(SongList);
