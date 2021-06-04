import Routes from './routes';
import Sidebar from './components/SideBar'
import Container, { Content, SideBar } from './utils/styles/app';
import { Global } from '@emotion/react';
import { classGlobal } from './GlobalStyles';

function App() {

  return (
    <Container>
      <Global styles={classGlobal} />
      <SideBar>
        <Sidebar />
      </SideBar>
      <Content>
        <Routes />
      </Content>
    </Container>
  );
}

export default App;
