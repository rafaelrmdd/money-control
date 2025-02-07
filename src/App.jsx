import { Header } from './components/Header/index';
import { GlobalStyle } from './globalStyles';
import { Content } from './components/Content/index'  ;
import Modal from 'react-modal';
import { useState } from 'react';
import { AddTransactionModal } from './components/AddTransactionModal';
import { TransactionsContextProvider } from './components/TransactionsContext';

function App() {
  Modal.setAppElement('#root');
  const [isAddTransactionModalOpen, setIsAddTransactionOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  const openAddTransactionModal = () => setIsAddTransactionOpen(true);
  const closeAddTransactionModal = () => setIsAddTransactionOpen(false);

  return (
    <div className="App">
      <TransactionsContextProvider
        value={{formData, setFormData, transactions, setTransactions, error, setError}}
      >
        <GlobalStyle />
        <Header openAddTransactionModal={openAddTransactionModal} />
        <Content transactions={transactions}/>
        <AddTransactionModal 
          isAddTransactionModalOpen={isAddTransactionModalOpen}
          closeAddTransactionModal={closeAddTransactionModal}
          formData={formData}
        />
      </TransactionsContextProvider>
    </div>
  );
};

export default App;
