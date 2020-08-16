import React, { createContext, useContext, useReducer } from 'react';

const ChatScreenStateContext = createContext({ display: false });
const ChatScreenDispatchContext = createContext<React.Dispatch<Action>>(() => ({}));

type State = {
  display: boolean;
};
type Action =
  | { type: 'DISPLAY' }
  | { type: 'NOT_DISPLAY' };

type reducer<State, Action> = (state: State, action: Action) => State;

function reducer<reducer>(state: State, action: Action) {
  switch (action.type) {
    case 'DISPLAY':
      return { ...state, display: true };
    case 'NOT_DISPLAY':
      return { ...state, display: false };
    default:
      return state;
  }
}

export const ChatScreenProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, { display: false });

  return (
    <ChatScreenDispatchContext.Provider value={dispatch}>
      <ChatScreenStateContext.Provider value={state}>
        { children }
      </ChatScreenStateContext.Provider>
    </ChatScreenDispatchContext.Provider>
  );
};

export const useChatScreenState = () => useContext(ChatScreenStateContext);
export const useChatScreenDispatch = () => useContext(ChatScreenDispatchContext);
