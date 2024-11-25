import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { supabase  } from "../../api/transactions";
import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../App";
import Modal from "react-modal";

export const AddTransactionModal = ({isAddTransactionModalOpen, closeAddTransactionModal }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { setFormData } = useContext(TransactionContext);
    const { transactions, setTransactions } = useContext(TransactionContext);

    const [type, setType] = useState('');

    const onSubmit = (data) => {
        setFormData(data);
        postTransactionData(data);

        setValue('name', '');
        setValue('reason', '');
        setValue('value', '');
        setValue('type', '');
        setType('')

        closeAddTransactionModal();
    };

    useEffect(() => {
        const fetchTransactionsData = async () => {
            const { data, error } = await supabase
                .from('transactions')
                .select('*');
            
            if(error){
                console.log("postTransactionData Error ", error);
                return;
            };

            setTransactions(data)
        }
        fetchTransactionsData();

    }, [transactions, setTransactions]);

    const postTransactionData = async (transaction) => {
        const { data, error } = await supabase
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

            if (errors) {
                console.log("postTransactionData Error: ", error);
                return;
            };

            setTransactions(data);
    };

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

                <input type="text"
                    placeholder="Type" 
                    value={type}  
                    {...register("type", {required: "Field 'Type' is required" })} 
                    disabled
                />
                {errors.type &&  <span id="value-error-message">{errors.type.message}</span>}

                <div className="gain-or-loss">
                    <div onClick={() => {
                        setValue('type', 'gain')
                        setType('gain')
                    }}>Gain</div>

                    <div onClick={() => {
                        setValue('type', 'loss')
                        setType('loss')
                    }}>Loss</div>
                </div>

                <button type="submit">Submit</button>
            </Container>
        </Modal>
    );
};