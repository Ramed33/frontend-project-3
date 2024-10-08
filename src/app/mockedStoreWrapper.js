import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';

import { rootReducer } from './store';

const store = ({ preloadedState } = {}) => configureStore({ reducer: rootReducer, preloadedState });

function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store({ preloadedState: initialState })}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}


export * from '@testing-library/react';

export { render };
export { store };