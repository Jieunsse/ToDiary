import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #764b00;
  border-bottom: 1px solid #black;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  list-style: none;
  padding-left: 0;
`;

export const Button = styled.button`
  font-size: 1.4rem;
  margin: 0.3rem;
  text-transform: capitalize;
  background-color: transparent;
  color: white;
  opacity: 0.8;
  font-weight: bold;
  outline: none;
  border: none;
  &:hover {
    opacity: 1;
  }
`;



