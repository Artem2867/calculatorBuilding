import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../app/App.css'

const GarageMeterial = (props) => {
    return (
        <div>
            <div>
                <input type="checkbox"  checked={props.itemFour} onChange={(event) => {props.itemFourCheck(event.target.checked)}}/>
                <NavLink className='item' to='/sizes' onChange={(event) => {props.itemFourCheck(event.target.checked = true)}}>
                        Металл
                </NavLink>
            </div>
            <div>
                <input type="checkbox"  checked={props.itemTwo} onChange={(event) => {props.itemTwoCheck(event.target.checked)}}/>
                <NavLink className='item' to='/sizes' onChange={(event) => {props.itemTwoCheck(event.target.checked = true)}}>
                        Шлакоблок
                </NavLink>
            </div>
            <div>
                <input type="checkbox"  checked={props.itemFife} onChange={(event) => {props.itemFifeCheck(event.target.checked)}}/>
                <NavLink className='item' to='/sizes' onChange={(event) => {props.itemFifeCheck(event.target.checked = true)}}>
                        Сендвич-панели
                </NavLink>
            </div>
        </div>
    )
}


export default GarageMeterial