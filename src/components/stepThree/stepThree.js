import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app/App.css'

const StepThree = (props) => {
    return(
        <div>
            <div className='step'>
                Шаг {props.building===2?'2':'3'}
            </div>
            <div className='content'>
                <div className='subtitle'>
                    Материал стен:
                </div>
                <div className='items'>
                    {props.material()}
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


export default StepThree