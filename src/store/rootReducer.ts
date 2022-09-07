import { combineReducers } from "redux";

import chartsReducer from './charts/chartReducer';
import campaignReducer from './campaigns/campaignReducer';

export default combineReducers({
    chartsReducer,
    campaignReducer
});
