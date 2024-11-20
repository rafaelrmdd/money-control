import { Header } from './components/Header/index'
import { GlobalStyle } from './globalStyles';
import { Content } from './components/Content/index'  
import Modal from 'react-modal'
import { useState } from 'react';
import { AddTransactionModal } from './components/AddTransactionModal';



function App() {

  Modal.setAppElement('#root');
  const [isAddTransactionModalOpen, setIsAddTransactionOpen] = useState(false)

  const openAddTransactionModal = () => {
    setIsAddTransactionOpen(true);
  }

  const closeAddTransactionModal = () => {
    setIsAddTransactionOpen(false);
  }

  return (
    <div className="App">
      <GlobalStyle />

      <Header openAddTransactionModal={openAddTransactionModal}/>
      <Content />
      <AddTransactionModal 
        isAddTransactionModalOpen={isAddTransactionModalOpen}
        closeAddTransactionModal={closeAddTransactionModal}
      />
      
    </div>
  );
}

export default App;
