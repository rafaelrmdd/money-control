import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { supabase  } from "../../services/api/transactions";
import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../TransactionsContext"
import Modal from "react-modal";

export const AddTransactionModal = ({isAddTransactionModalOpen, closeAddTransactionModal }) => {

    const { register, handleSubmit, setValue, formState: { errors }, reset} = useForm();
    const { setFormData } = useContext(TransactionContext);

    //State from 'App.jsx'
    const { transactions, setTransactions } = useContext(TransactionContext);

    const [type, setType] = useState('');

    //When submit button is pressed
    const onSubmit = (data) => {
        setFormData(data);
        postTransactionData(data);

        // setValue('name', '');
        // setValue('reason', '');
        // setValue('value', '');
        // setValue('type', '');
        // setType('')

        reset()

        closeAddTransactionModal();
    };

    useEffect(() => {
        //Catch all the transactions in the database and set it into the state
        const fetchTransactionsData = async () => {
            const { data, error } = await supabase
                .from('transactions')
                .select('*');
            
            if(error){
                console.log("postTransactionData Error ", error);
                return;
            };
            console.log('transactions: ', transactions)
        }

        setTimeout(fetchTransactionsData, 5000)
    });

    const postTransactionData = async (transaction) => {
        //Post the data into the database and set it into the state
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
            //Customized class to style the modal
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