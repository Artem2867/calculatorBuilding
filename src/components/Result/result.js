import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app/App.css'

const Result = (props) => {
    return(
        <div>
            <div className='step'>
                Рeзультат расчета
            </div>
            <div className='content'>
                <div className='subtitle'>
                    Успешно
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


export default Result