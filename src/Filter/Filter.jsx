import { Input, Label } from './Filter.styles';

function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
}

export default Filter;
