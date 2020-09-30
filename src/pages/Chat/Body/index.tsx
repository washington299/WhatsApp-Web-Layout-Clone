import React from 'react';

import InitialScreen from './InitialScreen';
import Chat from './Content';

import { useChatScreenState } from '../../../contexts/chat-screen';

import './styles.scss';

type Props = {
  user: {
    id: number;
    avatar: string;
    name: string;
  };
};
const Body = ({ user }: Props) => {
  const { display } = useChatScreenState();

  return (
    <>
      {display ? (
        <Chat user={user} />
      ) : (
        <InitialScreen displayChatScreen={display} />
      )}
    </>
  );
};

export default Body;
