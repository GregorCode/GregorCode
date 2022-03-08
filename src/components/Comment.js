import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', true);
    script.setAttribute('repo', process.env.COMMENT_BLOG);
    script.setAttribute('issue-term', 'title');
    script.setAttribute('theme', 'github-light');
    this.commentBox.current.appendChild(script);
  }

  render() {
    return (
      <div style={{ width: '100%' }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
