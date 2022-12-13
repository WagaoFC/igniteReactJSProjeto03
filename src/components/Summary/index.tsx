import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SumaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <SummaryContainer>
            <SumaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>
                <strong>R$ 17.400,00</strong>
            </SumaryCard>

            <SumaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>
                <strong>R$ 17.400,00</strong>
            </SumaryCard>

            <SumaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff' />
                </header>
                <strong>R$ 17.400,00</strong>
            </SumaryCard>
        </SummaryContainer>
    )
}