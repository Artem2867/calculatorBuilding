import { connect } from "react-redux"
import StepThree from "./stepThree"
import {defaultState} from '../../redux/reducers/calculatorReducer'
import React from 'react';
import HouseMaterialContainer from "./materialItems/houseMaterial/HouseMaterialContainer";
import GarageMaterialContainer from "./materialItems/garageMaterial/GarageMaterialContainer";






const StepThreeContainer = (props) => {
    const nextStep = () => {
        if (props.material !== '') {
            return '/sizes'
        } else {
            return '/material'
        }
    }
    const material = () => {
        if (props.building === 1) {
            return (
                <HouseMaterialContainer/>
            )
        } else if (props.building === 2) {
            return (
                <GarageMaterialContainer/>
            )
        } else {
            return (
                <div>
                    Выбран не корректный вид страения
                </div>
            )
        }
    }
    return ( 
        <div>
            <StepThree
                building={props.building}
                defaultState={props.defaultState}
                material={material}
                nextStep={nextStep}/>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        material: state.material.material,
        building: state.calculator.building
    }
}



export default connect(mapStateToProps, 
    {defaultState}) (StepThreeContainer)