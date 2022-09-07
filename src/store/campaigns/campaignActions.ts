import api from '../../api';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';

const { fetchCampaigns } = api;

interface IActions {
    GET_CAMPAIGNS_BEGIN: string;
    GET_CAMPAIGNS_SUCCESS: string;
    GET_CAMPAIGNS_FAILURE: string;
    SET_CAMPAIGNS_BEGIN: string;
    SET_CAMPAIGNS_SUCCESS: string;
    SET_CAMPAIGNS_FAILURE: string;
}

interface IGET_CAMPAIGNS_BEGIN {
    type: IActions['GET_CAMPAIGNS_BEGIN'];
}

interface IGET_CAMPAIGNS_SUCCESS {
    type: IActions['GET_CAMPAIGNS_SUCCESS'];
    payload: { myCampaigns: Campaigns.Campaign[] };
}

interface IGET_CAMPAIGNS_FAILURE {
    type: IActions['GET_CAMPAIGNS_FAILURE'];
    payload: { error: Error | AxiosError };
}

interface ISET_CAMPAIGNS_BEGIN {
    type: IActions['SET_CAMPAIGNS_BEGIN'];
}

interface ISET_CAMPAIGNS_SUCCESS {
    type: IActions['SET_CAMPAIGNS_SUCCESS'];
    payload: { myCampaigns: Campaigns.Campaign[] };
}

interface ISET_CAMPAIGNS_FAILURE {
    type: IActions['SET_CAMPAIGNS_FAILURE'];
    payload: { error: Error | AxiosError };
}

type CampaignsActionType = (
    IGET_CAMPAIGNS_SUCCESS |
    IGET_CAMPAIGNS_BEGIN |
    IGET_CAMPAIGNS_FAILURE |
    ISET_CAMPAIGNS_SUCCESS |
    ISET_CAMPAIGNS_BEGIN |
    ISET_CAMPAIGNS_FAILURE
)

export const GET_CAMPAIGNS_BEGIN = 'GET_CAMPAIGNS_BEGIN';
export const GET_CAMPAIGNS_SUCCESS = 'GET_CAMPAIGNS_SUCCESS';
export const GET_CAMPAIGNS_FAILURE = 'GET_CAMPAIGNS_FAILURE';
export const SET_CAMPAIGNS_BEGIN = 'SET_CAMPAIGNS_BEGIN';
export const SET_CAMPAIGNS_SUCCESS = 'SET_CAMPAIGNS_SUCCESS';
export const SET_CAMPAIGNS_FAILURE = 'SET_CAMPAIGNS_FAILURE';

export const getCampaignsBegin = () => ({
    type: GET_CAMPAIGNS_BEGIN
})

export const getCampaignsSuccess = (myCampaigns: Campaigns.Campaign[]) => ({
    type: GET_CAMPAIGNS_SUCCESS,
    payload: { myCampaigns }
})

export const getCampaignsFailure = (error: Error | AxiosError) => ({
    type: GET_CAMPAIGNS_SUCCESS,
    payload: { error }
})
export const setCampaignsBegin = () => ({
    type: SET_CAMPAIGNS_BEGIN
})

export const setCampaignsSuccess = (myCampaigns: Campaigns.Campaign[]) => ({
    type: SET_CAMPAIGNS_SUCCESS,
    payload: { myCampaigns }
})

export const setCampaignsFailure = (error: Error | AxiosError) => ({
    type: SET_CAMPAIGNS_SUCCESS,
    payload: { error }
})

export const getCampaigns = () => {
    return (dispatch: Dispatch<CampaignsActionType>) => {
        dispatch(getCampaignsBegin())
        return fetchCampaigns()
            .then((myCampaigns: Campaigns.Campaign[]) => {
                dispatch(getCampaignsSuccess(myCampaigns))
            })
            .catch((error: Error | AxiosError) => {
                dispatch(getCampaignsFailure(error))
            })
    }
}

export const setCampaign = (name: string, currentCampaigns: Campaigns.Campaign[]) => {
    return (dispatch: Dispatch<CampaignsActionType>) => {
        dispatch(setCampaignsBegin())
        return fetchCampaigns()
            .then((campaigns: Campaigns.Campaign[]) => {
                const randomValue = Math.random() * campaigns.length
                const randomIndex = Math.floor(randomValue)
                const newCampaign = campaigns[randomIndex]
                const randomId = (name + randomValue).trim().replaceAll(' ', '').replaceAll('.', '-')
                newCampaign.id = randomId
                newCampaign.name = name
                dispatch(setCampaignsSuccess([
                    ...currentCampaigns,
                    newCampaign
                ]))
            })
            .catch((error: Error | AxiosError) => {
                dispatch(setCampaignsFailure(error))
            })
    }
}

