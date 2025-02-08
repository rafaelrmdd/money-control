import { useContext } from "react";
import { Container } from "./styles";
import { TransactionContext } from "../TransactionsContext";

export const Card = () => {
    
    const { transactions } = useContext(TransactionContext);

    //Formate to BRL currency pattern
    const brlFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2
    });

    const transactionsGain = transactions.filter((transaction) => transaction.type === true)
    const transactionsLoss = transactions.filter((transaction) => transaction.type === false)

    const totalGains = transactionsGain.reduce((sum, transaction) => sum + transaction.value, 0);
    const totalLosses = transactionsLoss.reduce((sum, transaction) => sum + transaction.value, 0);
    const total = totalGains - totalLosses;

    console.log("transactions: ", transactions)
    console.log("transactionsGains: ", transactionsGain)
    console.log("transactionsLosses: ", transactionsLoss)

    /*
        This method will be used to define the class of the cards
        and change the style of it depending on which class it has 
    */
    const getClassName = (total) => {
        if (total > 0) {
          return "card-item-total-positive";
        } else if (total === 0) {
          return "card-item-total-neutral";
        } else {
          return "card-item-total-negative";
        }
      };
    
    return (
        <Container>
            <div className="card-item-gains">
                <h1>Gains</h1>
                <h2>{brlFormat.format(totalGains)}</h2>
            </div>
            -
            <div className="card-item-losses">
                <h1>Losses</h1>
                <h2>{brlFormat.format(totalLosses)}</h2>
            </div>
            =
            <div className={getClassName(total)}>
                <h1>Total</h1>
                <h2>{brlFormat.format(total)}</h2>
            </div>
        </Container>
    );
};