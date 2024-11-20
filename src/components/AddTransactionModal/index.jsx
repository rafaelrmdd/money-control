import Modal from "react-modal"
import { Container } from "./styles"

export const AddTransactionModal = ({isAddTransactionModalOpen, closeAddTransactionModal}) => {
    
    return (
        <Modal 
            isOpen={isAddTransactionModalOpen}
            onRequestClose={closeAddTransactionModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container>
                <h2>Add transaction</h2>

                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Reason"/>
                <input type="number" placeholder="Value"/>

                <button>Submit</button>
            </Container>
        </Modal>
    )
}