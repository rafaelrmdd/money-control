import { Button } from '../Button';
import { Container } from './styles';

export const Header = () => {
    return (
        <Container>
            <header>
                <nav>
                    <span>Logo</span>
                </nav>
            </header>
            <section>
                <Button type='gain'/>
                <Button type='lose'/>
            </section>
            
        </Container>
    )
}