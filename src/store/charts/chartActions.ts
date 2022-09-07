import api from '../../api';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';

const { fetchCharts } = api;

interface IActions {
    GET_CHARTS_BEGIN: string;
    GET_CHARTS_SUCCESS: string;
    GET_CHARTS_FAILURE: string;
}

interface IGET_CHARTS_BEGIN {
    type: IActions['GET_CHARTS_BEGIN'];
}

interface IGET_CHARTS_SUCCESS {
    type: IActions['GET_CHARTS_SUCCESS'];
    payload: { myCharts: Charts.Chart };
}

interface IGET_CHARTS_FAILURE {
    type: IActions['GET_CHARTS_FAILURE'];
    payload: { error: Error | AxiosError };
}

type ChartsActionType = (
    IGET_CHARTS_SUCCESS |
    IGET_CHARTS_BEGIN |
    IGET_CHARTS_FAILURE
)

export const GET_CHARTS_BEGIN = 'GET_CHARTS_BEGIN';
export const GET_CHARTS_SUCCESS = 'GET_CHARTS_SUCCESS';
export const GET_CHARTS_FAILURE = 'GET_CHARTS_FAILURE';

export const getChartsBegin = () => ({
    type: GET_CHARTS_BEGIN
})

export const getChartsSuccess = (myCharts: Charts.Chart) => ({
    type: GET_CHARTS_SUCCESS,
    payload: { myCharts }
})

export const getChartsFailure = (error: Error | AxiosError) => ({
    type: GET_CHARTS_SUCCESS,
    payload: { error }
})

export const getCharts = () => {
    return (dispatch: Dispatch<ChartsActionType>) => {
        dispatch(getChartsBegin())
        return fetchCharts()
            .then((myCharts: Charts.Chart) => {
                dispatch(getChartsSuccess(myCharts))
            })
            .catch((error: Error | AxiosError) => {
                dispatch(getChartsFailure(error))
            })
    }
}

