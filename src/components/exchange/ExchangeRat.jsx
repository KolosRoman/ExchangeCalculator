import React, {useState, useEffect} from 'react';

export const ExchangeRate = ({getCurrentValue}) => {
    
    const [currentRate, setCurrentRate] = useState([]);
    let todayDate = new Date().toLocaleDateString('en-GB')

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then((response) => response.json())
        .then((json) => {setCurrentRate(json.filter(el => el.cc == 'EUR' || el.cc == 'USD'))});
    }, [])

    useEffect(() => {
        const arrayRate = [];
            for (const i of currentRate) {
                arrayRate.push(i.rate);
            }
            getCurrentValue(arrayRate);
    })

    return (
        <header className='header-container'>
            <h2 className='header-title'>Курс валют на {todayDate}</h2>
            <div className='header-currency-container'>
            {currentRate.map(el => (
                <div key={el.r030} className='header-currency-block'>
                    <p className='header-currency-block-title'>{el.txt}</p>
                    <p className='header-currency-block-course'>{el.rate.toFixed(2) }</p>
                </div>
            ))}
            </div>
        </header>
    )
}