import Modal from "react-modal";

import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { supabase  } from "../../services/api/transactions";
import { useContext, useState } from "react";
import { TransactionContext } from "../TransactionsContext"

export const AddTransactionModal = () => {

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const { isAddTransactionModalOpen, handleCloseAddTransactionModal } = useContext(TransactionContext)

    const [type, setType] = useState('');

    //When submit button is pressed
    const onSubmit = (data) => {
        handleAddTransaction(data);

        setValue('type', '');
        setType('')

        reset()
        handleCloseAddTransactionModal();
    };

    const handleAddTransaction = async (transaction) => {
        const { error } = await supabase
            .from('transactions')
            .insert([
                {
                    name: transaction.name,
                    reason: transaction.reason,
                    value: transaction.value,
                    type: transaction.type === 'gain'
                }
            ])
            .select();

            if (error) {
                console.log("handleAddTransaction error: ", error);
                return;
            };
    };

    return (
        <Modal 
            isOpen={isAddTransactionModalOpen}
            onRequestClose={handleCloseAddTransactionModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container onSubmit={handleSubmit(onSubmit)}>
                <h2>Add transaction</h2>

                <input type="text" placeholder="Name" {...register("name")}/>

                <input type="text" placeholder="Reason" {...register("reason")}/>

                <input type="number" placeholder="Value" {...register("value", {required: "Field 'Value' is required"})}/>
                {errors.value &&  <span id="value-error-message">{errors.value.message}</span>}

                <input type="text"
                    placeholder="Type" 
                    id="gain-or-loss-input"
                    value={type}  
                    {...register("type", {required: "Field 'Type' is required" })} 
                    disabled
                />
                {errors.type &&  <span id="value-error-message">{errors.type.message}</span>}

                <div className="gain-or-loss">
                    <div onClick={() => {
                        setValue('type', 'gain')
                        setType('gain')
                    }}>gain</div>

                    <div onClick={() => {
                        setValue('type', 'loss')
                        setType('loss')
                    }}>loss</div>
                </div>

                <button type="submit">Submit</button>
            </Container>
        </Modal>
    );
};