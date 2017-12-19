import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyric from '../mutations/addLyric';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            type="text"
            value={this.state.content}
            onChange={evnet => this.setState({ content: this.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default LyricCreate;
