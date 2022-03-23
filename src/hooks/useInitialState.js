import { useState } from 'react';

const initialState = {
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

  return {
    state,
    setSearchBar,
    setPosts,
  };
};

export default useInitialState;
