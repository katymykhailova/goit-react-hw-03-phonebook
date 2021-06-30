import PropTypes from 'prop-types';
import { FiPhone, FiTrash2 } from 'react-icons/fi';
import Button from '../Button';

import { ContactsText } from './Contact.styles';

function Contact({ name, number, onDeleteContact }) {
  return (
    <>
      <ContactsText>
        <FiPhone size="15" />
        {name}: {number}
      </ContactsText>
      <Button type="button" onClick={onDeleteContact} aria-label="add contact">
        <FiTrash2 size="15" />
      </Button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default Contact;
