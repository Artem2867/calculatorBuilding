import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app/App.css'

const ErrorResult = (props) => {
    return(
        <div>
            <div className='step'>
                Результат расчета
            </div>
            <div className='content'>
                <div className='subtitle'>
                    Ошибка
                </div>
                <div className='message'>
                    {props.message}
                </div>
            </div>
            <div className='btnItems'>
                <NavLink to='/' onClick={props.defaultState}>
                    <button className='btn'>Новый расчет</button>
                </NavLink>
            </div>
        </div>
    )
}


export default ErrorResult