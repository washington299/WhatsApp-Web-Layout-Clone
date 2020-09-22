import React, { useState, useEffect, useRef } from 'react';
import {
  MdComputer,
  MdSearch,
  MdAttachment,
  MdMoreVert,
  MdChevronLeft,
  MdInsertEmoticon,
  MdMic,
} from 'react-icons/md';

import { useChatScreenState, useChatScreenDispatch } from '../../../contexts/chat-screen';
import { useContactsState } from '../../../contexts/contacts';

import MessageBox from '../../../components/MessageBox';

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
  const dispatch = useChatScreenDispatch();
  const { avatar, name, lastSeen } = useContactsState();

  const initialListMessages = [
    {
      author: 123,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 1234,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 123,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 123,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 1234,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 123,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 123,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 1234,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
    {
      author: 123,
      body: 'In ad voluptate sit Lorem enim ullamco magna pariatur deserunt. Laborum adipisicing dolore eiusmod ad minim fugiat. Quis et ad qui ea minim esse eiusmod deserunt laborum nulla ex velit culpa deserunt. Non consectetur pariatur Lorem id cupidatat aute ex dolore proident elit.',
    },
  ];
  const [listOfMessages, setListOfMessages] = useState(initialListMessages);

  const body = useRef<HTMLElement>(null);

  useEffect(() => {
    if (body.current && body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [avatar, listOfMessages]);

  function handleClick() {
    setListOfMessages(initialListMessages);
    dispatch({
      type: 'NOT_DISPLAY',
    });
  }

  return (
    <>
      {display && (
        <div className="body__chat">
          <header className="body__header">
            <div className="body__info">
              <MdChevronLeft className="body__arrow-back" onClick={handleClick} />
              <img src={avatar} alt={name} className="body__profile-picture" />
              <div className="body__texts">
                <h2 className="body__name">{name}</h2>
                <span className="body__lastSeen">{`last seen today ${lastSeen}`}</span>
              </div>
            </div>
            <div className="body__options">
              <MdSearch className="body__item" />
              <MdAttachment className="body__item" />
              <MdMoreVert className="body__item" />
            </div>
          </header>

          <section ref={body} className="body__wallpaper">
            {listOfMessages.map((msg) => (
              <MessageBox key={msg.body} msg={msg} user={user} />
            ))}
          </section>

          <div className="body__text-area">
            <MdInsertEmoticon className="body__item" />
            <input type="text" placeholder="Type a message" className="body__field" />
            <MdMic className="body__item" />
          </div>
        </div>
      )}
      {!display && (
        <section className="body" style={display ? { flex: 1, display: 'block' } : {}}>
          <div className="body__screen">
            <img
              src="assets/images/whatsapp-initial-connection.jpg"
              alt="Whatsapp connection"
              className="body__initial-img"
            />
            <h1 className="body__initial-title">Keep your phone connected</h1>
            <p className="body__initial-text">
              WhatsApp connects to your phone to sync message. To reduce data usage, connect your
              phone to Wi-Fi.
            </p>
            <hr />
            <MdComputer className="body__initial-icon" />
            <span className="body__initial-span">
              WhatsApp is available for Windows.
              <a href="/" className="body__initial-windows-link">Get it here.</a>
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default Body;
