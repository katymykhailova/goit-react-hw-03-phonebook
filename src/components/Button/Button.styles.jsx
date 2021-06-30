import styled from 'styled-components';

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 10px;

  text-align: center;
  letter-spacing: 0.06em;
  background-color: #2196f3;
  color: #fff;
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  & svg {
    color: #ffffff;
    margin-right: 0;
  }

  &:hover {
    background-color: #1e81d3;
  }
`;
