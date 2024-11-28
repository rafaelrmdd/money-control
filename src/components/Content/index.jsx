import { Container } from './styles';
import { FaRegTrashAlt } from "react-icons/fa";
import { supabase } from '../../api/transactions';
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { Card } from '../Card'; 

export const Content = ({ transactions}) => {

    //Delete on click method that receives the 'transaction' object from the map method
    const handleDelete = async (transaction) => {
       const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', transaction.id);

        if (error) {
            console.log("handleDelete: ", error);
        };
    
    };

    //Formate to Real
    const brlFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2
    });

    //Format to Brasilia's time (UTC-3)
    const brtFormat = Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    return(
        <Container>
            <Card transactions={transactions}/>

            <main>
                {transactions.map((transaction) => (
                    <div key={transaction.id} className={transaction.type === true ? 'gain' : 'loss'}>
                        {transaction.type === true ? <GoArrowUp /> : <GoArrowDown />}
                        <div className="text">
                            <h2 id='name-text'>{transaction.name}</h2>
                            <h3 id='reason-text'>{transaction.reason}</h3>
                        </div>

                        <div className="value-and-date">
                            <h2>{brlFormat.format(transaction.value)}</h2>
                            <h3>{brtFormat.format(new Date(transaction.created_at))}</h3>
                        </div>

                        <div className="icons">
                            <FaRegTrashAlt onClick={() => handleDelete(transaction)}/>
                        </div>
                    </div>
                ))}
            </main>
        </Container>
    );
};