import { Header } from './components/Header/index'
import { GlobalStyle } from './globalStyles';
import { Content } from './components/Content/index'  

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Header />
      <Content />
    </div>
  );
}

export default App;
