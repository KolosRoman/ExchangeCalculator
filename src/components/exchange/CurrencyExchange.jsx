import React, {useState} from 'react';


export const CurrencyExchange = ({todayCurrentRate}) => {
    const [inputValueOne, setinputValueOne] = useState('');
    const [resultOne, setResultOne] = useState('');
    const [inputValueTwo, setinputValueTwo] = useState('');
    const [resultTwo, setResultTwo] = useState('');
    const [selectCurrencyOne, setSelectCurrencyOne] = useState('UAH');
    const [selectCurrencyTwo, setSelectCurrencyTwo] = useState('UAH');

    let currentRateWithHryvnya = [...todayCurrentRate, {r030: 100, rate: 1, cc: 'UAH'}]


    let currencyRates = currentRateWithHryvnya.reduce((acc, el) => {
        acc[el.cc] = el.rate
        return acc
    }, {})

    function crossconvertRight (value, currency1, currency2) {
        let result;
        if (currency2 === currency1) {
            result = value;
        }

        if (currencyRates[currency1] === 1) {
            result = value/currencyRates[currency2];
        } else {
            result = value*currencyRates[currency1]/currencyRates[currency2];
        }
        
        return result;
    }

    function crossconvertLeft (value, currency1, currency2) {
        let result;
        if (currency2 === currency1) {
            result = value;
        }

        if (currencyRates[currency2] === 1) {
            result = value/currencyRates[currency1];
        } else {
            result = value*currencyRates[currency2]/currencyRates[currency1];
        }

        return result;
    }
    

    let onInput = (e) => {
        setinputValueOne(e.target.value);
        setinputValueTwo(e.target.value);
        setResultOne(e.target.value);
        setResultTwo(e.target.value);

        if (e.target.name === 'inputLeft') {
            let input = e.target.value;
            
            let result = crossconvertRight(input, selectCurrencyOne, selectCurrencyTwo);
            setResultTwo(result);
            setResultOne(input);
            setinputValueTwo(result)

        }
        
        if (e.target.name === 'inputRight') {
            let input = e.target.value;

            let result = crossconvertLeft(input, selectCurrencyOne, selectCurrencyTwo)
            setResultOne(result);
            setResultTwo(input);
            setinputValueOne(result);
        }
    }

    let onCurrencyChoice = (e) => {
        if (e.target.name === 'valueRight') {
            let result = crossconvertRight(resultOne, selectCurrencyOne, e.target.value);
            setResultTwo(result);
            setinputValueTwo(result);
            setSelectCurrencyTwo(e.target.value);
        }
        if (e.target.name === 'valueLeft') {
            let result = crossconvertLeft(resultTwo, e.target.value, selectCurrencyTwo);
            setResultOne(result);
            setinputValueOne(result);
            setSelectCurrencyOne(e.target.value);
        }
    }

    let editInputValue = (inputValue) => {

        if (inputValue === '') {
            return '';
        }
        return String(Math.round(+inputValue * 100) / 100);
    }

    const onButtonClean = () => {
        setinputValueOne('');
        setinputValueTwo('');
        setResultOne('');
        setResultTwo('');
    }

    return (
        <main className='main-container'>
            <h1 className='main-container-title'>Конвертер валют</h1>
            <form action="#" className='form'>
                <div className='form-container'>
                    <div className='form-block'>
                        <input type="number" name='inputLeft' value={editInputValue(inputValueOne)} onInput={onInput} className='form-block-input'/>
                        <select name="valueLeft" onChange={onCurrencyChoice} className='form-block-select'>
                        {currentRateWithHryvnya.map(el => (
                            <option key={el.r030} value={el.cc}>{el.cc}</option>
                        ))}
                        </select>
                    </div>
                    <div className='form-block'>
                    <input type="number" name='inputRight' value={editInputValue(inputValueTwo)} onInput={onInput} className='form-block-input'/>
                        <select name="valueRight" onChange={onCurrencyChoice} className='form-block-select'>
                        {currentRateWithHryvnya.map(el => (
                            <option key={el.r030} value={el.cc}>{el.cc}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className='form-button-blok'>
                    <button type='button' onClick={onButtonClean} className='form-button-blok-item'>Очистити</button>
                </div>
            </form>
        </main>
    )
}