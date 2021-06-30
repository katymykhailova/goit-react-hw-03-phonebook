import styled from 'styled-components';

export const Contacts = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-items: baseline;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 10px;
  padding: 10px;

  & svg {
    color: #2196f3;
    margin-right: 10px;
  }
`;
