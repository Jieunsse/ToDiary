import { Contents, LogoZone, Wrapper, Nav } from './styled';
import logo from '../../../assets/logo/logo.svg';
const Header = ({ userData }) => {
  return (
    <Wrapper>
      <Contents>
        <LogoZone>
          <img src={logo} alt="로고" />
        </LogoZone>
        <Nav>
          <ul>
            <li>ToDoList</li>
            <li>Diary</li>
            <li>{userData}</li>
          </ul>
        </Nav>
      </Contents>
    </Wrapper>
  );
};

export default Header;
