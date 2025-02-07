import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionsContextProvider = ({children}) => {

    const [isAddTransactionModalOpen, setIsAddTransactionOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    const openAddTransactionModal = () => setIsAddTransactionOpen(true);
    const closeAddTransactionModal = () => setIsAddTransactionOpen(false);
  
    return (
        <TransactionContext.Provider
            value={{formData, setFormData, transactions, setTransactions, error, setError}}
        >
            {children}
        </TransactionContext.Provider>
    )
}