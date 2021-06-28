import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';

import {
  Contacts,
  ContactsItem,
  ContactsText,
  Button,
} from './ContactList.styles';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <FiPhone size="15" />
          <ContactsText>
            {name}: {number}
          </ContactsText>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </Button>
        </ContactsItem>
      ))}
    </Contacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
