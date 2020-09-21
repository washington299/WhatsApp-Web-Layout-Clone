import React, {
  createContext, useReducer, useContext,
} from 'react';

import { IContacts } from '../interface';

const initialData = {
  id: 0,
  name: '',
  avatar: '',
  lastMessage: '',
  timeLastMessage: '',
  lastSeen: '',
  pinned: undefined,
  mute: undefined,
  unreadMessages: undefined,
};

const ContactsDataStateContext = createContext<IContacts>(initialData);
const ContactsDataDispatchContext = createContext<React.Dispatch<Action>>(() => ({}));

type Action =
  | { type: 'GET_CONTACTS_DATA' }
  | { type: 'SET_CONTACTS_DATA', payload: IContacts };

function reducer(state: IContacts, action: Action) {
  switch (action.type) {
    case 'GET_CONTACTS_DATA':
      return { ...state };
    case 'SET_CONTACTS_DATA':
      return {
        ...state,
        name: action.payload.name,
        avatar: action.payload.avatar,
        lastMessage: action.payload.lastMessage,
        timeLastMessage: action.payload.timeLastMessage,
        lastSeen: action.payload.lastSeen,
        pinned: action.payload.pinned,
        mute: action.payload.mute,
        unreadMessages: action.payload.unreadMessages,
      };
    default:
      return state;
  }
}

export const ContactsDataProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <ContactsDataDispatchContext.Provider value={dispatch}>
      <ContactsDataStateContext.Provider value={state}>
        { children }
      </ContactsDataStateContext.Provider>
    </ContactsDataDispatchContext.Provider>
  );
};

export const useContactsState = () => useContext(ContactsDataStateContext);
export const useContactsDispatch = () => useContext(ContactsDataDispatchContext);
