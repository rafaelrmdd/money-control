import { Container } from './styles';

export const Header = ({openAddTransactionModal}) => {
    return (
        <Container>
            <header>
                <nav>
                    <span>Logo</span>

                    <div className="vertical-line"></div>
                    
                    <button onClick={openAddTransactionModal}>Add transaction</button>
                </nav>
            </header>   
        </Container>
    )
}