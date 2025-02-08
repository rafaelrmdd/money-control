import { createContext, useEffect, useState } from "react";
import { supabase } from "../../services/api/transactions";

export const TransactionContext = createContext();

export const TransactionsContextProvider = ({children}) => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const { data, error } = await supabase
                .from('transactions')
                .select('*')

            if(error){
                console.log('An error ocurred: ', error);
            }

            setTransactions(data);
        };

        setTimeout(fetchTransactions, 5000);
    })

    const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false);

    const handleOpenAddTransactionModal = () => setIsAddTransactionModalOpen(true);
    const handleCloseAddTransactionModal = () => setIsAddTransactionModalOpen(false);
  
    return (
        <TransactionContext.Provider
            value={{ transactions, isAddTransactionModalOpen, handleOpenAddTransactionModal, handleCloseAddTransactionModal }}
        >
            {children}
        </TransactionContext.Provider>
    )
}