const ITEM_ONE_CHECK = 'ITEM_ONE_CHECK'
const ITEM_TWO_CHECK = 'ITEM_TWO_CHECK'
const ITEM_THREE_CHECK = 'ITEM_THREE_CHECK'
const ITEM_FOUR_CHECK = 'ITEM_FOUR_CHECK'
const ITEM_FIFE_CHECK = 'ITEM_FIFE_CHECK'



const materialState = {
    material: '',
    materialChecked: {
        itemOne: false,
        itemTwo: false,
        itemThree: false,
        itemFour: false,
        itemFife: false
    }
}

const materialReducer = (state = materialState, action) => {
    switch(action.type) {
        case 'ITEM_ONE_CHECK': 
            return {
                ...state,
                material: 1,
                materialChecked: {
                    ...state.materialChecked,
                    itemOne: action.check,
                    itemTwo: false,
                    itemThree: false,
                    itemFour: false,
                    itemFife: false
                }
            }
        case 'ITEM_TWO_CHECK': 
            return {
                ...state,
                material: 2,
                materialChecked: {
                    ...state.materialChecked,
                    itemOne: false,
                    itemTwo: action.check,
                    itemThree: false,
                    itemFour: false,
                    itemFife: false
                }
            }
        case 'ITEM_THREE_CHECK': 
            return {
                ...state,
                material: 3,
                materialChecked: {
                    ...state.materialChecked,
                    itemOne: false,
                    itemTwo: false,
                    itemThree: action.check,
                    itemFour: false,
                    itemFife: false
                }
            }
        case 'ITEM_FOUR_CHECK': 
            return {
                ...state,
                material: 4,
                materialChecked: {
                    ...state.materialChecked,
                    itemOne: false,
                    itemTwo: false,
                    itemThree: false,
                    itemFour: action.check,
                    itemFife: false
                }
            }
        case 'ITEM_FIFE_CHECK': 
            return {
                ...state,
                material: 5,
                materialChecked: {
                    ...state.materialChecked,
                    itemOne: false,
                    itemTwo: false,
                    itemThree: false,
                    itemFour: false,
                    itemFife: action.check
                }
            }
        case 'DEFAULT':
            return state = materialState
        default:
            return state
    }
}


export const itemOneCheck = (check) => {
    return {
        type:ITEM_ONE_CHECK,
        check
    }
}
export const itemTwoCheck = (check) => {
    return {
        type:ITEM_TWO_CHECK,
        check
    }
}
export const itemThreeCheck = (check) => {
    return {
        type:ITEM_THREE_CHECK,
        check
    }
}
export const itemFourCheck = (check) => {
    return {
        type:ITEM_FOUR_CHECK,
        check
    }
}
export const itemFifeCheck = (check) => {
    return {
        type:ITEM_FIFE_CHECK,
        check
    }
}



export default materialReducer