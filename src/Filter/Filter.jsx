import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

import { Input, Label } from './Filter.styles';
import css from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <DebounceInput
        type="text"
        debounceTimeout={300}
        onChange={onChange}
        className={css.DebounceInput}
      />
      {/* <Input type="text" value={value} onChange={onChange} /> */}
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
