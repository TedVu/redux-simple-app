import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
    renderList() {
        return (
            <div className="grid gap-y-6">
                {this.props.songs.map((song) => {
                    return (
                        <div className="grid grid-cols-3" key={song.title}>
                            <div className="col-start-1 col-end-2 text-center">
                                {song.title}
                            </div>
                            <div className="col-start-2 col-end-3 text-center">
                                {" "}
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Select
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return <div className="container">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// connect returns a function and invoke a function
// A very interesting syntax
export default connect(mapStateToProps)(SongList);
