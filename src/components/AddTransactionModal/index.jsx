import Modal from "react-modal"
import { Container } from "./styles"
import { useForm } from "react-hook-form"
import { supabase  } from "../../api/transactions"
import { useEffect, useState } from "react"

export const AddTransactionModal = ({isAddTransactionModalOpen, closeAddTransactionModal}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [type, setType] = useState('');

    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(type)

    return (
        <Modal 
            isOpen={isAddTransactionModalOpen}
            onRequestClose={closeAddTransactionModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container onSubmit={handleSubmit(onSubmit)}>
                <h2>Add transaction</h2>

                <input type="text" placeholder="Name" {...register("name")}/>
                <input type="text" placeholder="Reason" {...register("reason")}/>
                <input type="number" placeholder="Value" {...register("value", {required: "Field 'Value' is required"})}/>
                {errors.value &&  <span id="value-error-message">{errors.value.message}</span>}

                <div className="gain-or-loss">
                    <button onClick={() => setType('gain')}>Gain</button>
                    <button onClick={() => setType('loss')}>Loss</button>
                </div>

                <button type="submit">Submit</button>
            </Container>
        </Modal>
    )
}