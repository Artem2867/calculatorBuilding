import React from 'react';
import {connect} from 'react-redux'
import {itemOneCheck, itemTwoCheck, itemThreeCheck} from '../../../../redux/reducers/materialReducer'
import HouseMaterial from './houseMaterial';



const HouseMaterialConteiner = (props) => {
    return (
        <div>
            <HouseMaterial
                itemOne={props.itemOne}
                itemTwo={props.itemTwo}
                itemThree={props.itemThree}
                itemOneCheck={props.itemOneCheck}
                itemThreeCheck={props.itemThreeCheck}
                itemTwoCheck={props.itemTwoCheck}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        itemOne: state.material.materialChecked.itemOne,
        itemTwo: state.material.materialChecked.itemTwo,
        itemThree: state.material.materialChecked.itemThree,
    }
}



export default connect(mapStateToProps, 
    {itemOneCheck, itemTwoCheck, itemThreeCheck}) (HouseMaterialConteiner)