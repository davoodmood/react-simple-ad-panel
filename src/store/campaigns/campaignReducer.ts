import * as campaignActions from './campaignActions';
import ActionType from '../actionType'

const initialState = {
    myCampaigns: [],
    error: null,
    loading: false
}

const chartReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case campaignActions.GET_CAMPAIGNS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case campaignActions.GET_CAMPAIGNS_SUCCESS:
            return {
                ...state,
                myCampaigns: action.payload.myCampaigns
            }
        case campaignActions.GET_CAMPAIGNS_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case campaignActions.SET_CAMPAIGNS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case campaignActions.SET_CAMPAIGNS_SUCCESS:
            return {
                ...state,
                myCampaigns: action.payload.myCampaigns
            }
        case campaignActions.SET_CAMPAIGNS_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default chartReducer;