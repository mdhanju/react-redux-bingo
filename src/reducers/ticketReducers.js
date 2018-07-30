import * as TYPES from '../actions/ticketActionTypes';

export default function tickets(state = {}, action) {
	switch (action.type) {
	case TYPES.ONE:
		return {
			...state,
			one: action.value
		}
	case TYPES.TWO:
		return {
			...state,
			two: action.value
		}
	case TYPES.THREE:
		return {
			...state,
			three: action.value
		}
	case TYPES.FOUR:
		return {
			...state,
			four: action.value
		}
	case TYPES.ONE_BALL:
		return {
			...state,
			oneBall: action.value
		}
	case TYPES.TWO_BALL:
		return {
			...state,
			twoBall: action.value
		}
	case TYPES.THREE_BALL:
		return {
			...state,
			threeBall: action.value
		}
	case TYPES.FOUR_BALL:
		return {
			...state,
			fourBall: action.value
		}
	default:
		return state
	}
}
