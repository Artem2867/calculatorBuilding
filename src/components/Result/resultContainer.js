import Result from "./result"
import {connect} from 'react-redux'
import {defaultState} from '../../redux/reducers/calculatorReducer'


const ResultConteiner = (props) => {
    return (
        <div>
            <Result
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

export default connect(mapStateToProps, {defaultState}) (ResultConteiner)