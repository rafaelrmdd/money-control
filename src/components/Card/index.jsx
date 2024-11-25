import { useEffect, useState, useContext } from "react";
import { supabase } from "../../api/transactions";
import { Container } from "./styles";
import { TransactionContext } from "../../App";

export const Card = () => {
    
    const [transactionsTrue, setTransactionsTrue] = useState([]);
    const [transactionsFalse, setTransactionsFalse] = useState([]);

    const [isPositive, setIsPositive] = useState(true);

    const { transactions } = useContext(TransactionContext);

    useEffect(() => {
        const fetchDataIfTypeTrue = async () => {
            const {data, error} = await supabase
            .from('transactions')
            .select()
            .eq('type', true);

            if(error) {
                console.log("FetchDataIfTypeTrue Error: ", error);
                return;
            };

            setTransactionsTrue(data);
                
        };

        const fetchDataIfTypeFalse = async () => {
            const {data, error} = await supabase
            .from('transactions')
            .select()
            .eq('type', false);

            if(error) {
                console.log("FetchDataIfTypeFalse Error: ", error);
                return;
            }

            setTransactionsFalse(data);
        };

        fetchDataIfTypeTrue();
        fetchDataIfTypeFalse();
    }, [transactions]);

    //Formate to Real
    const brlFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2
    });

    const totalGains = transactionsTrue.reduce((sum, transaction) => sum + transaction.value, 0);
    const totalLosses = transactionsFalse.reduce((sum, transaction) => sum + transaction.value, 0);
    const total = totalGains - totalLosses;

    const getClassName = (total) => {
        if (total > 0) {
          return "card-item-total-positive";
        } else if (total === 0) {
          return "card-item-total";
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
            <div 

            /*
                If isPositive === true the name of the class will be "card-item-total-positive"
                If isPositive === null the name of the class will be "card-item-total"
                If isPositive === false the name of the class will be "card-item-total-negative"
            */
            className={getClassName(total)}>
                <h1>Total</h1>
                <h2>{brlFormat.format(total)}</h2>
            </div>
        </Container>
    );
};