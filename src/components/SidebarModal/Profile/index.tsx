import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { CameraAlt, Edit } from '@material-ui/icons';

import './styles.scss';

const Profile = () => {
  const [displayShadow, setDisplayShadow] = useState(false);

  return (
    <section className="profile">
      <div className="profile__img-area">
        <span
          className="profile__shadow"
          style={displayShadow ? { display: 'flex' } : { display: 'none' }}
          onMouseLeave={() => setDisplayShadow(false)}
        >
          <div className="profile__shadow-content">
            <CameraAlt className="profile__icon--camera" />
            <span className="profile__shadow-text">
              Change profile
              {' '}
              <br />
              {' '}
              photo
            </span>
          </div>
        </span>
        <span onMouseEnter={() => setDisplayShadow(true)}>
          <Avatar className="profile__img" />
        </span>
      </div>
      <div className="profile__box">
        <span className="profile__title">Your name</span>
        <div className="profile__info">
          <input type="text" defaultValue="Washington Campos" className="profile__input" />
          <Edit className="profile__icon--edit" />
        </div>
      </div>
      <div className="profile__text">
        This is not your username or pin. This name will be visible to your WhatsApp contacts
      </div>
      <div className="profile__box">
        <span className="profile__title">About</span>
        <div className="profile__info">
          <input type="text" defaultValue="In the end it doesn't even matter" className="profile__input" />
          <Edit className="profile__icon--edit" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
