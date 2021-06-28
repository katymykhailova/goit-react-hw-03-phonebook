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

export const ContactsText = styled.span``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 10px 28px;
  max-width: 200px;

  font-weight: 700;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.06em;
  text-decoration: none;
  background-color: #2196f3;
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;
