import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return (
      <div>
        {this.props.songs.map((song) => {
          console.log(song);
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// connect returns a function and invoke a function
export default connect(mapStateToProps)(SongList);
