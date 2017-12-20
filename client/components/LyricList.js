import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../mutations/addLike';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({ variables: { id } });
  }

  renderLyrics() {
    if (!this.props.lyrics.length) {
      return <li className="collection-item">Please Add Lyrics</li>;
    }

    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
            {likes}
            <i className="material-icons" onClick={() => this.onLike(id)}>
              thumb_up
            </i>
          </div>
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default graphql(mutation)(LyricList);
