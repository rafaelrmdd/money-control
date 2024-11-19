import { Container } from './styles'

export const Button = ({type,  openAddGainModal }) => {

    return (
        <Container type={type} onClick={openAddGainModal}>
            teste
        </Container>
    )
}