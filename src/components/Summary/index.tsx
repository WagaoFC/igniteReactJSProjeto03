import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SumaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }

            return acc;
        },
        {
            income: 0,
            outcome: 0,
            total: 0
        }
    )

    return (
        <SummaryContainer>
            <SumaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>
                <strong>{summary.income}</strong>
            </SumaryCard>

            <SumaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>
                <strong>{summary.outcome}</strong>
            </SumaryCard>

            <SumaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff' />
                </header>
                <strong>{summary.total}</strong>
            </SumaryCard>
        </SummaryContainer>
    )
}