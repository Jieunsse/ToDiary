import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: rgb(182,145,101);
  background: linear-gradient(90deg, rgba(182,145,101,1) 13%, rgba(167,119,63,1) 83%);
`;

export const Box = styled.div`
  width: 100%;
  height: 60%;
  max-width: 500px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  -webkit-box-shadow: 5px 5px 21px 4px rgba(0, 0, 0, 0.45);
  box-shadow: 5px 5px 21px 4px rgba(0, 0, 0, 0.45);
  overflow: hidden;
`;