import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 1.4rem 1rem;
  background-color: #764b00;
  box-sizing: border-box;
`;


export const Input = styled.input`
  flex: 1 0 auto;
  font-size: 1.4rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Button = styled.button`
  background-color: #684b00;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0 2rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(125%);
  }
`;