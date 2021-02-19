import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app/App.css'


const StepOne = (props) => {
    const buildingHouse = (e) => {
        let check = e.target.checked ||true
        props.buildingHouse(check)
    }
    const buildingGarage = (e) => {
        let check = e.target.checked || true
        props.buildingGarage(check)
    }
    return(
        <div>
            <div className='step'>
                Шаг 1
            </div>
            <div className='content'>
                <div className='subtitle'>
                    Что будем строить?
                </div>
                <div className='items'>
                    <div>
                        <input type="checkbox"  checked={props.houseCheck} onChange={buildingHouse}/>
                        <NavLink className='item' to='/height' onClick={buildingHouse}>
                                Жилой дом
                        </NavLink>
                    </div>
                    <div>
                        <input type="checkbox"  checked={props.garageCheck} onChange={buildingGarage}/>
                        <NavLink className='item' to='/material' onClick={buildingGarage}>
                                Гараж
                        </NavLink>
                    </div>
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


export default StepOne