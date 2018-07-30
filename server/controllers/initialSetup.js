const _ = require('lodash');

function generateRandonNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

function getBalls() {
	let items = [];
	while (items.length < 25) {
		const randomnumber = generateRandonNumber();
		if (items && items.indexOf(randomnumber) > -1) continue;
		items[items.length] = randomnumber;
	}
	return items;
}

function getBall(allNumbers) {
	while (true) {
		const radomNumber = generateRandonNumber();
		if (allNumbers && allNumbers.indexOf(radomNumber) > -1) continue;
		return radomNumber;
	}
}

function validateWinner(allItems, userItems) {
	if (userItems.length >= 25) {
		return false;
	}
	for (var i = 0; i < userItems.length; i++) {
		if (allItems.indexOf(userItems[i]) === -1) return false;
	}
	return true;
}

function getInitialNumbers(req, res, next) {
	const ball = generateRandonNumber();
	req.session = req.session || {};
	req.session.balls = [ball];

	res.send({
		ball,
		balls: {
			ONE: getBalls(),
			TWO: getBalls(),
			THREE: getBalls(),
			FOUR: getBalls()
		}
	});
}

function getNewBall(req, res, next) {
	req.session = req.session || {};
	const balls = req.session.balls;
	const ball = getBall(balls);

	balls.push(ball);

	req.session.balls = balls;
	res.send({
		ball
	});
}

function verfiyBingo(req, res, next) {
	req.session = req.session || {};
	const balls = req.session.balls || [];
	const oneBall = req.body.oneBall || [];
	const twoBall = req.body.twoBall || [];
	const threeBall = req.body.threeBall || [];
	const fourBall = req.body.oneBall || [];

	res.send({
		isOneWinner: validateWinner(balls, oneBall),
		isTwoWinner: validateWinner(balls, twoBall),
		isThreeWinner: validateWinner(balls, threeBall),
		isFourWinner: validateWinner(balls, fourBall)
	});
}

module.exports = {
	getInitialNumbers,
	getNewBall,
	verfiyBingo
};
