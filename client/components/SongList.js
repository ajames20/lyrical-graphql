import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../mutations/removeSong';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id }, refetchQueries: [{ query }] });
  }

  renderSongs() {
    return this.props.data.songs.map(({ title, id }) => (
      <li className="collection-item" key={id}>
        {title}
        <i className="material-icons" onClick={() => this.onSongDelete(id)}>
          delete
        </i>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="songs/new " className="btn-floating btn-large right red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(SongList));
