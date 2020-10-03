import React from 'react';

import { Contacts } from '../../../utils/data';

import './styles.scss';

const FindContacts = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return (
    <section className="find-contacts">
      <div className="find-contacts__list">
        {letters.map((letter) => (
          <>
            <div className="find-contacts__letter">{letter.toUpperCase()}</div>
            {Contacts.filter((contact) => contact.name.charAt(0).toLowerCase() === letter)
              .map((contact) => (
                <div key={contact.id} className="find-contacts__contact-filtered">
                  <img src={contact.avatar} alt={contact.name} className="find-contacts__contact-img" />
                  <div className="find-contacts__contact-name">{contact.name}</div>
                </div>
              ))}
          </>
        ))}
      </div>
    </section>
  );
};

export default FindContacts;
