import * as chartActions from './chartActions';
import ActionType from '../actionType'

const initialState = {
    myCharts: null,
    error: null,
    loading: false
}

const chartReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case chartActions.GET_CHARTS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case chartActions.GET_CHARTS_SUCCESS:
            return {
                ...state,
                myCharts: action.payload.myCharts
            }
        case chartActions.GET_CHARTS_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default chartReducer;
