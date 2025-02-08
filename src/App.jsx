import Modal from 'react-modal';

import { Header } from './components/Header/index';
import { GlobalStyle } from './globalStyles';
import { Content } from './components/Content/index'  ;
import { AddTransactionModal } from './components/AddTransactionModal';
import { TransactionsContextProvider } from './components/TransactionsContext';

function App() {
  Modal.setAppElement('#root');


  return (
    <div className="App">
      <TransactionsContextProvider>
        <GlobalStyle />
        <Header />
        <Content />
        <AddTransactionModal />
      </TransactionsContextProvider>
    </div>
  );
};

export default App;
