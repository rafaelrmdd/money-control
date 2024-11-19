import Modal from "react-modal"

export const AddGainModal = ({isAddGainModalOpen, closeAddGainModal}) => {
    
    return (
        <Modal 
            isOpen={isAddGainModalOpen}
            onRequestClose={closeAddGainModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <input type="text" placeholder="TESTEEE"/>
            <input type="text" placeholder="TESTEEE"/>
            <input type="text" placeholder="TESTEEE"/>
            <input type="text" placeholder="TESTEEE"/>
            <input type="text" placeholder="TESTEEE"/>
        </Modal>
    )
}