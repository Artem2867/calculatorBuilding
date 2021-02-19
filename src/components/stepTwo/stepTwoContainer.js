import { connect } from "react-redux"
import StepTwo from "./stepTwo"
import {newHeight, defaultState} from '../../redux/reducers/calculatorReducer'
import React from 'react';



const stepTwoContainer = (props) => {
    const nextStep = () => {
        if (props.height !== '') {
            return '/material'
        } else {
            return '/height'
        }
    }
    return (
        <div>
            <StepTwo
                height={props.height}
                newHeight={props.newHeight}
                defaultState={props.defaultState}
                nextStep={nextStep}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        height: state.calculator.height
    }
}



export default connect(mapStateToProps, {newHeight, defaultState}) (stepTwoContainer)