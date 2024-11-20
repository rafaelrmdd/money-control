import { Container } from './styles'

export const Content = () => {
    return(
        <Container>
            <main>
                <div className="gain">
                    <div className="text">
                        <h2 id='name-text'>Name: Lorem ipsum dolor sit.</h2>
                        <h3 id='reason-text'>Reason: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus exercitationem corrupti recusandae error libero culpa cumque vitae blanditiis veritatis.</h3>
                    </div>

                    <div className="value">
                        <h2>R$90.00</h2>
                    </div>
                </div>
                <div className="lose">
                    <div className="text">
                        <h2 id='name-text'>Name: Carro</h2>
                        <h3 id='reason-text'>Reason: Comprei porque quis</h3>
                    </div>

                    <div className="value">
                        <h2>R$90.00</h2>
                    </div>
                </div>
            </main>
        </Container>
    )
}