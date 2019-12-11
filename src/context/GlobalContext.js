import React from 'react';

import GlobalStyle from '../styles/global';

export const GlobalState = React.createContext();
export const GlobalDispatch = React.createContext();

export const GlobalActions = {
  ACTIVE_FORMAT: 'ACTIVE_FORMAT',
  SCHEDULE_MODAL: 'SCHEDULE_MODAL',
};

const initialState = {
  activeFormat: 'medium',
  scheduleModalVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GlobalActions.ACTIVE_FORMAT: {
      const { activeFormat } = action;
      return {
        ...state,
        activeFormat,
      };
    }
    case GlobalActions.SCHEDULE_MODAL: {
      const { scheduleModalVisible } = action;
      return {
        ...state,
        scheduleModalVisible,
      };
    }
    case 'SET': {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    }
    default:
      throw new Error('Bad Action Type');
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <GlobalStyle />
      <GlobalState.Provider value={state}>
        <GlobalDispatch.Provider value={dispatch}>
          {children}
        </GlobalDispatch.Provider>
      </GlobalState.Provider>
    </>
  );
};

export default GlobalContextProvider;
