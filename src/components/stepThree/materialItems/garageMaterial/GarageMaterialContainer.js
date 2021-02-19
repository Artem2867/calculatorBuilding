import React from 'react';
import GarageMeterial from './garageMaterial';
import {connect} from 'react-redux'
import {itemFourCheck, itemFifeCheck, itemTwoCheck} from '../../../../redux/reducers/materialReducer'



const GarageMaterialConteiner = (props) => {
    return (
        <div>
            <GarageMeterial
                itemTwo={props.itemTwo}
                itemFour={props.itemFour}
                itemFife={props.itemFife}
                itemFifeCheck={props.itemFifeCheck}
                itemFourCheck={props.itemFourCheck}
                itemTwoCheck={props.itemTwoCheck}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        itemTwo: state.material.materialChecked.itemTwo,
        itemFour: state.material.materialChecked.itemFour,
        itemFife: state.material.materialChecked.itemFife,
    }
}



export default connect(mapStateToProps, 
    {itemFourCheck, itemFifeCheck, itemTwoCheck}) (GarageMaterialConteiner)