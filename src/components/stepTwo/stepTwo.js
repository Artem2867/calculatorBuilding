import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app/App.css'


const StepTwo = (props) => {
    const newHeight = (e) => {
        const value = e.target.value
        props.newHeight(value)
    }
    return(
        <div>
            <div className='step'>
                Шаг 2
            </div>
            <div className='content'>
                <div className='subtitle'>
                    Колличество этажей(число):
                </div>
                <div className='items'>
                    <input className='input' type="number" value={props.height} onChange={newHeight}/>
                </div>
            </div>
            <div className='btnItems'>
                <NavLink to='/' onClick={props.defaultState}>
                    <button className='btn'>Отмена</button>
                </NavLink>
                <NavLink to={props.nextStep}>
                    <button className='btn'>Далее</button>
                </NavLink>
            </div>
        </div>
    )
}


export default StepTwo