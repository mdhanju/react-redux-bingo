let initialData = {
		app: {
				loading: false,
				loadingError: false,
				allBalls: [],
				lastBall: null,
				previousBalls: [],
		},
		tickets: {
			one: [],
			two: [],
			three: [],
			four: [],
			oneBall: [],
			twoBall: [],
			threeBall: [],
			fourBall: [],
		}
};

const serverProps = { ...initialData };

export default serverProps;
