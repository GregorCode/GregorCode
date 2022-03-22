import { useState } from 'react';

const initialState = {
  posts: [],
  search: '',
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setSearchBar = (word) => {
    setState({
      ...state,
      search: word,
    });
  };

  const setPosts = (posts) => {
    setState({
      ...state,
      posts: posts,
    });
  };

  return {
    state,
    setSearchBar,
    setPosts,
  };
};

export default useInitialState;
