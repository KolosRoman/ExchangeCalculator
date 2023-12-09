import React, {useState} from 'react';

import {ExchangeRate} from './exchange/ExchangeRat.jsx';
import {CurrencyExchange} from './exchange/CurrencyExchange.jsx';

export const App = () => {
    const [usd, setUsd] = useState(0);
    const [eur, setEur] = useState(0);


    const getCurrent = (currencyValue) => {
        let [value1, value2] = currencyValue;
        setUsd(value1);
        setEur(value2)
    }


    return (
        <main>
            <ExchangeRate getCurrentValue={getCurrent} />
            <CurrencyExchange currentRate={[usd, eur]}/>
        </main>
    )
}