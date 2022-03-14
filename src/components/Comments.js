import React, { useRef, useEffect, useState } from 'react';

const Comments = () => {
  const comment = useRef(null);

  const url = 'https://utteranc.es/client.js';

  const [status, setStatus] = useState(url ? 'loading' : 'idle');

  useEffect(() => {
    if (!url) {
      setStatus('idle');
      return;
    }

    let script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('async', true);
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('issue-term', 'title');
    script.setAttribute('repo', process.env.COMMENT_BLOG);

    // Add script to document body
    comment.current.appendChild(script);

    // store status of the script

    const setAttributeStatus = (event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error');
    };

    script.addEventListener('load', setAttributeStatus);
    script.addEventListener('error', setAttributeStatus);

    return () => {
      // useEffect clean up
      if (script) {
        script.removeEventListener('load', setAttributeStatus);
        script.removeEventListener('error', setAttributeStatus);
      }
    };
  }, [url, comment]);

  return <div className="w-full">{<div ref={comment}></div>}</div>;
};

export default Comments;
