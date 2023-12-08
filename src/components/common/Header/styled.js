import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #efefef;
`;

export const Contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 5120px;
  max-height: 2880px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    font-size: 20px;
    font-family: 'Nanum Gothic Coding', monospace;
    
  }
  li + li {
    margin-left: 30px;
  }

`;

export const LogoZone = styled.div`
  margin-top: 15px;
`;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const Li = styled.li`
  cursor: pointer;
`;