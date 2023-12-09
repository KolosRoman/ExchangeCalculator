import React, {useState} from 'react';


export const CurrencyExchange = ({currentRate}) => {
    let [todayCourseUsd, todayCourseEur] = currentRate;
    const [inputValueOne, setinputValueOne] = useState('');
    const [inputValueTwo, setinputValueTwo] = useState('');
    const [selectCurrencyOne, setSelectCurrencyOne] = useState('USD');
    const [selectCurrencyTwo, setSelectCurrencyTwo] = useState('UAH');


    const onSelectCurrencyTwo = (e) => {

        if (e.target.value === 'USD') {

            if (selectCurrencyOne === 'USD') {
                setinputValueTwo(inputValueOne)
            }
            if (selectCurrencyOne === 'UAH') {
                setinputValueTwo(inputValueOne/todayCourseUsd)
            }
            if (selectCurrencyOne === 'EUR') {
                setinputValueTwo(inputValueOne*todayCourseEur/todayCourseUsd)
            }
        }

        if (e.target.value === 'UAH') {

            if (selectCurrencyOne === 'USD') {
                setinputValueTwo(inputValueOne*todayCourseUsd)
            }
            if (selectCurrencyOne === 'UAH') {
                setinputValueTwo(inputValueOne)
            }
            if (selectCurrencyOne === 'EUR') {
                setinputValueTwo(inputValueOne*todayCourseEur)
            }
        }

        if (e.target.value === 'EUR') {

            if (selectCurrencyOne === 'USD') {
                setinputValueTwo(inputValueOne*todayCourseUsd/todayCourseEur)
            }
            if (selectCurrencyOne === 'UAH') {
                setinputValueTwo(inputValueOne/todayCourseEur)
            }
            if (selectCurrencyOne === 'EUR') {
                setinputValueTwo(inputValueOne)
            }
        }

        setSelectCurrencyTwo(e.target.value);
    }

    const onSelectCurrencyOne = (e) => {
        if (e.target.value === 'USD') {
            if (selectCurrencyTwo === 'USD') {
                setinputValueOne(inputValueTwo)
            }
            if (selectCurrencyTwo === 'UAH') {
                setinputValueOne(inputValueTwo/todayCourseUsd)
            }
            if (selectCurrencyTwo === 'EUR') {
                setinputValueOne(inputValueTwo*todayCourseUsd/todayCourseEur)
            }
        }

        if (e.target.value === 'UAH') {
            if (selectCurrencyTwo === 'USD') {
                setinputValueOne(inputValueTwo*todayCourseUsd)
            }
            if (selectCurrencyTwo === 'UAH') {
                setinputValueOne(inputValueTwo)
            }
            if (selectCurrencyTwo === 'EUR') {
                setinputValueOne(inputValueTwo*todayCourseEur)
            }
        }

        if (e.target.value === 'EUR') {
            if (selectCurrencyTwo === 'USD') {
                setinputValueOne(inputValueTwo*todayCourseUsd/todayCourseEur)
            }

            if (selectCurrencyTwo === 'UAH') {
                setinputValueOne(inputValueTwo/todayCourseEur)
            }

            if (selectCurrencyTwo === 'EUR') {
                setinputValueOne(inputValueTwo)
            }
        }

        setSelectCurrencyOne(e.target.value);
    }
    

    const onInputValueCurrencyOne = (e) => {
        setinputValueOne(e.target.value);

        if (selectCurrencyOne === 'UAH') {
            if (selectCurrencyTwo === 'UAH') {
                setinputValueTwo(e.target.value)
            }
    
            if (selectCurrencyTwo === 'EUR') {
                setinputValueTwo(e.target.value/todayCourseEur)
            }
    
            if (selectCurrencyTwo === 'USD') {
                setinputValueTwo(e.target.value/todayCourseUsd)
            }
        }

        if (selectCurrencyOne === 'USD') {
            if (selectCurrencyTwo === 'UAH') {
                setinputValueTwo(e.target.value*todayCourseUsd)
            }
    
            if (selectCurrencyTwo === 'EUR') {
                setinputValueTwo(e.target.value*todayCourseUsd/todayCourseEur)
            }
    
            if (selectCurrencyTwo === 'USD') {
                setinputValueTwo(e.target.value)
            }
        }

        if (selectCurrencyOne === 'EUR') {
            if (selectCurrencyTwo === 'UAH') {
                setinputValueTwo(e.target.value*todayCourseEur)
            }
    
            if (selectCurrencyTwo === 'EUR') {
                setinputValueTwo(e.target.value)
            }
    
            if (selectCurrencyTwo === 'USD') {
                setinputValueTwo(e.target.value*todayCourseEur/todayCourseUsd)
            }
        }
        
    }

    const onInputValueCurrencyTwo = (e) => {
        setinputValueTwo(e.target.value);

        if (selectCurrencyOne === 'UAH') {
            if (selectCurrencyTwo === 'UAH') {
                setinputValueOne(e.target.value)
            }
    
            if (selectCurrencyTwo === 'EUR') {
                setinputValueOne(e.target.value*todayCourseEur)
            }
    
            if (selectCurrencyTwo === 'USD') {
                setinputValueOne(e.target.value*todayCourseUsd)
            }
        }

        if (selectCurrencyOne === 'USD') {
            if (selectCurrencyTwo === 'UAH') {
                setinputValueOne(e.target.value/todayCourseUsd)
            }
    
            if (selectCurrencyTwo === 'EUR') {
                setinputValueOne(e.target.value*todayCourseEur/todayCourseUsd)
            }
    
            if (selectCurrencyTwo === 'USD') {
                setinputValueOne(e.target.value)
            }
        }

        if (selectCurrencyOne === 'EUR') {
            if (selectCurrencyTwo === 'UAH') {
                setinputValueOne(e.target.value/todayCourseEur)
            }
    
            if (selectCurrencyTwo === 'EUR') {
                setinputValueOne(e.target.value)
            }
    
            if (selectCurrencyTwo === 'USD') {
                setinputValueOne(e.target.value*todayCourseUsd/todayCourseEur)
            }
        }
    }


    let editInputValue = (inputValue) => {

        return String(Math.round(+inputValue * 100) / 100)
    }

    const onButtonClean = () => {
        setinputValueOne('')
        setinputValueTwo('')
    }

    return (
        <main className='main-container'>
            <h1 className='main-container-title'>Конвертер валют</h1>
            <form action="#" className='form'>
                <div className='form-container'>
                    <div className='form-block'>
                        <input type="number" value={editInputValue(inputValueOne)} onInput={onInputValueCurrencyOne}className='form-block-input'/>
                        <select name="value1" onChange={onSelectCurrencyOne} className='form-block-select'>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>UAH</option>
                        </select>
                    </div>
                    <div className='form-block'>
                        <input type="number" value={editInputValue(inputValueTwo)} onInput={onInputValueCurrencyTwo} className='form-block-input'/>
                        <select name="value2" onChange={onSelectCurrencyTwo} className='form-block-select'>
                            <option>UAH</option>
                            <option>USD</option>
                            <option>EUR</option>
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