import * as TYPES from '../actions/appActionTypes';

export default function app(state = {}, action) {
	switch (action.type) {
	case TYPES.LOADING:
		return {
			...state,
			loading: action.value
		}
	case TYPES.LOADING_ERROR:
		return {
			...state,
			loadingError: action.value
		}
	case TYPES.ALL_BALLS:
		return {
			...state,
			allBalls: action.value
		}
	case TYPES.LAST_BALL:
		return {
			...state,
			lastBall: action.value
		}
	case TYPES.PREVIOUS_BALLS:
		return {
			...state,
			previousBalls: action.value
		}
	case TYPES.RESULTS:
		return {
			...state,
			result: action.value
		}
	default:
		return state
	}
}
