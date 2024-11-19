import { Header } from './components/Header/index'
import { GlobalStyle } from './globalStyles';
import { Content } from './components/Content/index'  
import Modal from 'react-modal'
import { useState } from 'react';
import { AddGainModal } from './components/AddGainModal';



function App() {

  Modal.setAppElement('#root');
  const [isAddGainModalOpen, setIsAddGainModalOpen] = useState(false)

  const openAddGainModal = () => {
    setIsAddGainModalOpen(true);
  }

  const closeAddGainModal = () => {
    setIsAddGainModalOpen(false);
  }

  return (
    <div className="App">
      <GlobalStyle />

      <Header openAddGainModal={openAddGainModal}/>
      <Content />
      <AddGainModal 
        isAddGainModalOpen={isAddGainModalOpen}
        closeAddGainModal={closeAddGainModal}
      />
      
    </div>
  );
}

export default App;
