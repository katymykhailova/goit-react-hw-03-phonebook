import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  padding: 0;
`;

export const Input = styled.input`
  margin-left: 10px;
  height: 30px;
  padding-left: 15px;
  background-color: transparent;
  border: 1px solid #2196f3;
  border-radius: 4px;
`;

export const Label = styled.label`
  margin-left: 10px;
`;

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
`;
