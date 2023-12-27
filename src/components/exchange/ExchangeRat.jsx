import React from 'react';

export const ExchangeRate = ({todayCurrentRate}) => {
    
    let todayDate = new Date().toLocaleDateString('en-GB')

    return (
        <header className='header-container'>
            <h2 className='header-title'>Курс валют на {todayDate}</h2>
            <div className='header-currency-container'>
            {todayCurrentRate.map(el => (
                <div key={el.r030} className='header-currency-block'>
                    <p className='header-currency-block-title'>{el.txt}</p>
                    <p className='header-currency-block-course'>{el.rate.toFixed(2)}</p>
                </div>
            ))}
            </div>
        </header>
    )
}