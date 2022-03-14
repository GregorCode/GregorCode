import { useState } from 'react';

const initialState = {
  lenguage: '',
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  return {
    state,
    toggleOrder,
    toggleMenu,
  };
};

export default useInitialState;
