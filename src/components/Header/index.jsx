import { Container,Button } from './styles';

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

        
                {/* <Button type='gain' onClick={openAddTransactionModal}>teste</Button>
                <Button type='loss' onClick={openAddTransactionModal}>teste</Button> */}
            
            
        </Container>
    )
}