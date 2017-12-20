import React, { Component } from 'react';

class LyricList extends Component {
  renderLyrics() {
    if (!this.props.lyrics.length) {
      return <li className="collection-item">Please Add Lyrics</li>;
    }
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
