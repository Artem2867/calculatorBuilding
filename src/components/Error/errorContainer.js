import {connect} from 'react-redux'
import {defaultState} from '../../redux/reducers/calculatorReducer'
import ErrorResult from "./error"


const ErrorConteiner = (props) => {
    return (
        <div>
            <ErrorResult
                message={props.message}
                defaultState={props.defaultState}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.calculator.message
    }
}

export default connect(mapStateToProps, {defaultState}) (ErrorConteiner)