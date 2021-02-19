import React from 'react';
import { NavLink } from 'react-router-dom';
import preloader from '../../assets/icon/91.gif'
import '../app/App.css'

const StepFour = (props) => {
    const newSizey = (e) => {
        const value = e.target.value
        props.newSizey(value)
    }
    const newSizex = (e) => {
        const value = e.target.value
        props.newSizex(value)
    }
    return(
        <div>
            <div className='step'>
                Шаг {props.stepNumber}
            </div>
            <div className='content'>
                <div className='subtitle'>
                    Длина стен (в метрах)
                </div>
                <div className='items'>
                    <input className='input' type='number' value={props.sizex} onChange={newSizex}/>
                    X
                    <input className='input' type='number' value={props.sizey} onChange={newSizey}/>
                </div>
            </div>
            <div className='btnItems'>
                {props.isLoading?
                    <div>
                        <NavLink to='/' onClick={props.defaultState}>
                            <button className='btn'>Отмена</button>
                        </NavLink> 
                        <button className='btn' onClick={props.getResult}>Рассчитать</button>
                    </div>: 
                    <img src={preloader} alt="loading" />}
            </div>
        </div>
    )
}


export default StepFour