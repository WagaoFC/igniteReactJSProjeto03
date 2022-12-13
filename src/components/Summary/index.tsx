import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SumaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SumaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SumaryCard>

            <SumaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SumaryCard>

            <SumaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff' />
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SumaryCard>
        </SummaryContainer>
    )
}