import { Contents, LogoZone, Wrapper, Nav, Button } from './styled';
import logo from '../../../assets/logo/logo.svg';
import { useNavigate } from 'react-router-dom';



const Header = ({ userData }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <Wrapper>
      <Contents>
        <LogoZone>
          <Button onClick={handleClick}>
            <img src={logo} alt="로고" />
          </Button>
          
        </LogoZone>
        <Nav>
          <ul>
            <li>ToDoList</li>
            <li>Diary</li>
          </ul>
        </Nav>
      </Contents>
    </Wrapper>
  );
};

export default Header;


