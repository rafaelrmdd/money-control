import { CardItem, Container } from "./styles"

export const Card = () => {
    return (
        <Container>
            <div className="card-item-gains">
                <h1>Gains</h1>
                <h2>R$4000,00</h2>
            </div>
            -
            <div className="card-item-losses">
                <h1>Losses</h1>
                <h2>R$4000,00</h2>
            </div>
            =
            <div className="card-item-total">
                <h1>Gains</h1>
                <h2>R$4000,00</h2>
            </div>
        </Container>
    )
}