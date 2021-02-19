import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../app/App.css'


const HouseMaterial = (props) => {
    return (
        <div>
            <div>
                <input type="checkbox"  checked={props.itemOne} onChange={(event) => {props.itemOneCheck(event.target.checked)}}/>
                <NavLink className='item' to='/sizes' onClick={(event) => {props.itemOneCheck(event.target.checked = true)}}>
                        Кирпич
                </NavLink>
            </div>
            <div>
                <input type="checkbox"  checked={props.itemTwo} onChange={(event) => {props.itemTwoCheck(event.target.checked)}}/>
                <NavLink className='item' to='/sizes' onClick={(event) => {props.itemTwoCheck(event.target.checked = true)}}>
                        Шлакоблок
                </NavLink>
            </div>
            <div>
                <input type="checkbox"  checked={props.itemThree} onChange={(event) => {props.itemThreeCheck(event.target.checked)}}/>
                <NavLink className='item' to='/sizes' onClick={(event) => {props.itemThreeCheck(event.target.checked = true)}}>
                        Деревянный брус
                </NavLink>
            </div>
        </div>
    )
}



export default HouseMaterial