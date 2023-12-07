import styled from 'styled-components';

export const Button = styled.button`
  background: white;
  color: black;
  width: 290px;
  padding: 7px 0px 7px 9px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border: 0.5px solid rgb(208, 211, 215);
  color: rgb(66, 67, 68);

  &hover: {
    background: rgb(247, 247, 247);
    color: black;
  }
`;
