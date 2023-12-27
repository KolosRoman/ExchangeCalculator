import React, {useState, useEffect} from 'react';

import {ExchangeRate} from './ExchangeRat.jsx';
import {CurrencyExchange} from './CurrencyExchange.jsx';

export const Api = () => {

    const [currentRateHeader, setCurrentRateHeader] = useState([]);
    const [currentRateMain, setCurrentRateMain] = useState([]);
    const requiredCurrencyHeader = ['USD', 'EUR'];
    const requiredCurrencyMain = ['USD', 'EUR', 'JPY', 'INR'];

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then((response) => response.json())
        .then((json) => {
            let arrayCurrencyHeader = [];
            let arrayCurrencyMain = [];
            for (let i = 0; i < json.length; i++) {
                if (requiredCurrencyHeader.includes(json[i].cc)) {
                    arrayCurrencyHeader.push(json[i])
                }
                if (requiredCurrencyMain.includes(json[i].cc)) {
                    arrayCurrencyMain.push(json[i])
                }
            }
            setCurrentRateHeader(arrayCurrencyHeader);
            setCurrentRateMain(arrayCurrencyMain);
        })
    }, [])



    return (
        <>
            <ExchangeRate todayCurrentRate = {currentRateHeader} />
            <CurrencyExchange todayCurrentRate = {currentRateMain} />
        </>
    )
}