import Header from '../common/Header/Index';
import Footer from '../common/Footer/Index';
import { Wrapper, Main } from './styled';

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
