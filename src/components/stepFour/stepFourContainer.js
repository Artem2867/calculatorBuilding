import { connect } from "react-redux"
import StepFour from "./stepFour"
import React from 'react';
import {defaultState, newSizex, newSizey, 
        getResultHouseSum, getResultGarageSum, isLoading} from '../../redux/reducers/calculatorReducer'
import { Redirect } from "react-router-dom";




const StepFourConteiner = (props) => {
    const result = () => {
        const building = props.building,
              height = props.height,
              material = props.material,
              sizex = props.sizex,
              sizey = props.sizey
        
        if (props.building === 1) {
            props.getResultHouseSum(building, height, material, sizex, sizey)              
        } else if (props.building === 2) {
            props.getResultGarageSum(building, material, sizex, sizey)
        }
    }
    const redirect = () => {
        if (props.result !== '') {
            if(props.result === 'error') {
                return <Redirect to='/error'/>
            } else {
                return <Redirect to='/result'/>
            }
        }
    }

    return (
            <div>
                {redirect()}
                <StepFour
                    sizey={props.sizey}
                    sizex={props.sizex}
                    newSizex={props.newSizex}
                    newSizey={props.newSizey}
                    defaultState={props.defaultState}
                    getResult={result}
                    stepNumber={props.building===2? '3': '4'}
                    isLoading={props.isLoading}/>
            </div>
        )
    
    
}

const mapStateToProps = (state) => {
    return {
        sizex: state.calculator.sizex,
        sizey: state.calculator.sizey,
        building: state.calculator.building,
        material: state.material.material,
        height: state.calculator.height,
        result: state.calculator.result,
        isLoading: state.calculator.isLoading
    }
}



export default connect(mapStateToProps, 
    {defaultState, newSizex, newSizey, 
     getResultHouseSum, getResultGarageSum}) (StepFourConteiner)