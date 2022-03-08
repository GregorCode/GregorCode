import React, { useEffect } from 'react';

const Comments = () => {
  const commentBox = React.createRef();

  useEffect(() => {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', true);
    script.setAttribute('repo', process.env.COMMENT_BLOG);
    script.setAttribute('issue-term', 'title');
    script.setAttribute('theme', 'github-light');
    commentBox && commentBox.current ? commentBox.current.appendChild(script) : console.error(`Error adding utterances comments on: ${commentBox}`);
  }, [commentBox]);

  return (
    <div style={{ width: '100%' }} id="comments">
      <div ref={commentBox}></div>
    </div>
  );
};

export default Comments;
