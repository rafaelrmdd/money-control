import { Container } from './styles'
import { useState, useEffect } from 'react'
import { supabase } from '../../api/transactions';

export const Content = () => {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactionsData = async () => {
            let { data, error} = await supabase
                .from('transactions')
                .select('*')
            
            if(error){
                setError(error)
                console.log(error)
            }

            if(transactions){
                setTransactions(data)
                console.log(transactions)
            }
        }

        fetchTransactionsData()
    }, [transactions])


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
                    <div className={transaction.type === true ? 'gain' : 'loss'}>
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