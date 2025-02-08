import { useContext } from 'react';
import { Container } from './styles';
import { TransactionContext } from '../TransactionsContext';

export const Header = () => {
    const { handleOpenAddTransactionModal } = useContext(TransactionContext)

    return (
        <Container>
            <header>                
                <span>$</span>
                <button onClick={handleOpenAddTransactionModal}>Add transaction</button>
            </header>   
        </Container>
    );
};