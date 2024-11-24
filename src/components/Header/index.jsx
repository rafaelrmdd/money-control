import { Container } from './styles';

export const Header = ({openAddTransactionModal}) => {
    return (
        <Container>
            <header>                
                <span>Logo</span>

                <button onClick={openAddTransactionModal}>Add transaction</button>
            </header>   
        </Container>
    )
}