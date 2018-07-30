import React, { Component } from 'react';
import { Row } from 'reactstrap';
import LastBallContainer from '../LastBallContainer';
import PreviousBallsContainer from '../PreviousBallsContainer';
import GamePadContainer from '../GamePadContainer';
import ClaimContainer from '../ClaimContainer';

const STYLES = {
		WRAPPER: {
				padding: 20,
				backgroundColor: '#e9ecef',
				margin: 'auto',
				maxWidth: 900
		}
};

class BongoContainer extends Component {
	render() {
		return (
			<Row style={ STYLES.WRAPPER }>
				<LastBallContainer/>
				<PreviousBallsContainer/>
				<ClaimContainer />
				<GamePadContainer />
			</Row>
		);
	}
}

export default BongoContainer;
