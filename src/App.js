import Routes from './routes';
import Navbar from './components/Button';
import Container from './App.module';
import Sidebar from './App.module';
import Content from './App.module';

function App() {

  return (
    <Container>
      <Sidebar>
        <Navbar />
      </Sidebar>
      <Content>
        <Routes />
      </Content>
    </Container>
  );
}

export default App;
