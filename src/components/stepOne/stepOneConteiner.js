import { connect } from "react-redux";
import StepOne from "./stepOne";
import React from 'react';
import {buildingGarage, buildingHouse, defaultState} from '../../redux/reducers/calculatorReducer'





const StepOneConteiner = (props) => {
    const nextStep = () => {
        if (props.houseCheck) {
            return '/height'
        } else if (props.garageCheck) {
            return '/material'
        } else {
            return '/'
        }
    }
    return (
        <div>
            <StepOne
                houseCheck={props.houseCheck}
                garageCheck={props.garageCheck}
                buildingHouse={props.buildingHouse}
                buildingGarage={props.buildingGarage}
                defaultState={props.defaultState}
                nextStep={nextStep}/>
        </div>   
    )
}

const mapStateToProps = (state) => {
    return {
        houseCheck: state.calculator.buildingChecked.houseCheck,
        garageCheck: state.calculator.buildingChecked.garageCheck
    }
}




export default connect(mapStateToProps, {buildingHouse, buildingGarage, defaultState}) (StepOneConteiner)