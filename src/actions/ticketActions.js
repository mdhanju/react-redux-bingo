import axios from 'axios';
import _get from 'lodash/get';
import * as TYPES from './ticketActionTypes';
import { BASE_URL } from '../constants';
import { updateGameBalls } from './appActions';

export function loading(value) {
	return {
		type: TYPES.LOADING,
		value
	}
}

export function updateOne(value) {
	return {
		type: TYPES.ONE,
		value
	}
}

export function updateTwo(value) {
	return {
		type: TYPES.TWO,
		value
	}
}

export function updateThree(value) {
	return {
		type: TYPES.THREE,
		value
	}
}

export function updateFour(value) {
	return {
		type: TYPES.FOUR,
		value
	}
}

export function updateOneBalls(value) {
	return {
		type: TYPES.ONE_BALL,
		value
	}
}

export function updateTwoBalls(value) {
	return {
		type: TYPES.TWO_BALL,
		value
	}
}

export function updateThreeBalls(value) {
	return {
		type: TYPES.THREE_BALL,
		value
	}
}

export function updateFourBalls(value) {
	return {
		type: TYPES.FOUR_BALL,
		value
	}
}

export function getAllBalls(language) {
	return (dispatch, getState) => {
		dispatch(loading(true));
		return axios({
			url: `${BASE_URL}/app`,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		}).then((response) => {
			const ball = _get(response, 'data.ball', {});
			const balls = _get(response, 'data.balls', {});
			dispatch(updateOne(balls.ONE));
			dispatch(updateTwo(balls.TWO));
			dispatch(updateThree(balls.THREE));
			dispatch(updateFour(balls.FOUR));
			dispatch(updateGameBalls(ball));
		}).then(function () {
			dispatch(loading(false));
		})
	}
};
