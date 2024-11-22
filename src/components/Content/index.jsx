import { Container } from './styles';
import { useState, useEffect, useContext } from 'react';
import { TransactionContext } from '../../App';

export const Content = ({ formData, transactions}) => {
    const { setTransactions } = useContext(TransactionContext);
    const [error, setError] = useState(null);

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

                <div className="loss">
                    <div className="text">
                        <h2 id='name-text'>Name: Carro</h2>
                        <h3 id='reason-text'>Reason: Comprei porque quis</h3>
                    </div>

                    <div className="value">
                        <h2>R$90.00</h2>
                    </div>
                </div>

                {transactions.map((transaction) => (
                    <div key={transaction.id} className={transaction.type === true ? 'gain' : 'loss'}>
                        <div className="text">
                            <h2 id='name-text'>{transaction.name}</h2>
                            <h3 id='reason-text'>{transaction.reason}</h3>
                        </div>

                        <div className="value">
                            <h2>{transaction.value}</h2>
                        </div>
                    </div>
                ))}
            </main>
        </Container>
    )
}