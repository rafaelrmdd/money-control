import { Container } from './styles'

export const Button = ({type, openAddTransactionModal }) => {

    return (
        <Container type={type} onClick={openAddTransactionModal}>
            teste
        </Container>
    )
}