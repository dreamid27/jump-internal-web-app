import Routes from './routes';
import Sidebar from './components/SideBar'
import Container, { Content, SideBar } from './Styles';

function App() {

  return (
    <Container>
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
