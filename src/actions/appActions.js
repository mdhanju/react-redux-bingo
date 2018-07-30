import axios from 'axios';
import _get from 'lodash/get';
import * as TYPES from './appActionTypes';
import { BASE_URL } from '../constants';

export function loading(value) {
	return {
		type: TYPES.LOADING,
		value
	}
}

export function updateError(value) {
	return {
		type: TYPES.LOADING_ERROR,
		value
	}
}

export function updateBalls(value) {
	return {
		type: TYPES.ALL_BALLS,
		value
	}
}

export function updateLastBall(value) {
	return {
		type: TYPES.LAST_BALL,
		value
	}
}

export function updatePreviousBalls(value) {
	return {
		type: TYPES.PREVIOUS_BALLS,
		value
	}
}

export function updateResult(value) {
	return {
		type: TYPES.RESULTS,
		value
	}
}

export function updateGameBalls(ball) {
	return (dispatch, getState) => {
		const prevBalls = _get(getState(), 'app.previousBalls', [])
		prevBalls.push(ball);
		dispatch(updateLastBall(ball));
		dispatch(updatePreviousBalls(prevBalls));
	}
}

export function getNewBall() {
	return (dispatch, getState) => {
		dispatch(loading(true));
		return axios({
			url: `${BASE_URL}/app/ball`,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		}).then((response) => {
			dispatch(updateGameBalls(_get(response, 'data.ball', [])));
		}).catch((error) => {
			dispatch(updateError(true));
		}).then(() => {
			dispatch(loading(false));
		})
	}
};

export function validateBingo() {
	return (dispatch, getState) => {
		dispatch(loading(true));
		const data = _get(getState(), 'tickets', {})
		return axios({
			url: `${BASE_URL}/app/verify`,
			timeout: 20000,
			method: 'post',
			data
		}).then((response) => {
			const result = response.data;
			dispatch(updateResult(result));
			return result;
		}).catch((error) => {
			dispatch(updateError(true));
		}).then((response) => {
			dispatch(loading(false));
			return response;
		})
	}
};
