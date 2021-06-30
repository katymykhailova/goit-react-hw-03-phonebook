import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';

import { ContactsText, Button } from './Contact.styles';

function Contact({ name, number, onDeleteContact }) {
  return (
    <>
      <ContactsText>
        <FiPhone size="15" />
        {name}: {number}
      </ContactsText>
      <Button type="button" onClick={onDeleteContact}>
        delete
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
