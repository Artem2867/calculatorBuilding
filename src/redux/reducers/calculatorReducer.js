import { GetResultSum } from "../../api/api"

const HOUSE = 'HOUSE'
const GARAGE = 'GARAGE'
const DEFAULT = 'DEFAULT'
const NEW_HEIGHT = 'NEW_HEIGHT'
const NEW_SIZEY = 'NEW_SIZEY'
const NEW_SIZEX = 'NEW_SIZEX'
const RESULT = 'RESULT'
const IS_LOADING = 'IS_LOADING'



const calculatorState = {
    buildingChecked: {
        garageCheck: false,
        houseCheck: false
    },
    building: '',
    height: '',
    sizex: '',
    sizey: '',
    result: '',
    message: '',
    isLoading: true
}


const calculatorReducer = (state = calculatorState, action) => {
    switch(action.type) {
        case 'HOUSE':
            return {
                ...state,
                building: 1,
                buildingChecked: {
                    ...state.buildingChecked,
                    houseCheck: action.checked,
                    garageCheck: false
                }
            }
        case 'GARAGE':
            return {
                ...state,
                building: 2,
                buildingChecked: {
                    ...state.buildingChecked,
                    houseCheck: false,
                    garageCheck: action.checked
                }
            }
        case 'NEW_HEIGHT': 
            return {
                ...state, 
                height: action.text
            }
        case 'NEW_SIZEY': 
            return {
                ...state, 
                sizey: action.text
            }
        case 'NEW_SIZEX': 
            return {
                ...state, 
                sizex: action.text
            }
        case 'RESULT':
            return {
                ...state,
                result: action.result,
                message: action.message,
                isLoading:true
            }
        case 'IS_LOADING': 
            return {
                ...state,
                isLoading: false
            } 
        case 'DEFAULT':
            return state = calculatorState
        default: 
            return state
    }
}

export const buildingHouse = (checked) => {
    return {
        type: HOUSE,
        checked
    }
}

export const buildingGarage = (checked) => {
    return {
        type: GARAGE,
        checked
    }
}

export const defaultState = () => {
    return {
        type: DEFAULT
    }
} 

export const newHeight = (text) => {
    return {
        type:NEW_HEIGHT,
        text
    }
}

export const newSizey = (text) => {
    return {
        type: NEW_SIZEY,
        text
    }
}

export const newSizex = (text) => {
    return {
        type: NEW_SIZEX,
        text
    }
}

export const result = (result, message) => {
    return {
        type: RESULT,
        result,
        message
    }
}

export const isLoading = () => {
    return {
        type: IS_LOADING
    }
}

export const getResultHouseSum = (building, height, material, sizex, sizey) => {
    return (dispatch) => {
        dispatch(isLoading())
        GetResultSum.house(building, height, material, sizex, sizey)
                    .then(response => {
                        dispatch(result(response.result, response.message))
                    })
    }
}

export const getResultGarageSum = (building, material, sizex, sizey) => {
    return (dispatch) => {
        dispatch(isLoading())
        GetResultSum.garage(building, material, sizex, sizey)
                    .then(response => {
                        dispatch(result(response.result, response.message))
                    })
    }
}
export default calculatorReducer;