import { Contents, LogoZone, Wrapper, Nav } from './styled';

const Header = () => {
  return (
    <Wrapper>
      <Contents>
        <LogoZone>로고 자리</LogoZone>
        <Nav>
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 2</li>
          </ul>
        </Nav>
      </Contents>
    </Wrapper>
  );
};

export default Header;
