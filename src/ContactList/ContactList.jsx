import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';

import { Contacts, ContactsItem, ContactsText } from './ContactList.styles';

function ContactList({ contacts }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <FiPhone size="15" />
          <ContactsText>
            {name}: {number}
          </ContactsText>
        </ContactsItem>
      ))}
    </Contacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
