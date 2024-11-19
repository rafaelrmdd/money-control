import { Container, ModalStyle, Button } from './styles';
import Modal from 'react-modal'

export const Header = ({openAddGainModal}) => {

    return (
        <Container>
            <header>
                <nav>
                    <span>Logo</span>
                </nav>
            </header>

            <section>
                <Button type='gain' onClick={openAddGainModal}>teste</Button>
                <Button type='loss' onClick={openAddGainModal}>teste</Button>
            </section>
            
        </Container>
    )
}