import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _get from 'lodash/get';
import { validateBingo } from '../../actions/appActions';

class ClaimContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	validateBingo = () => {
		this.props.validateBingo()
			.then(response => {
				const { isOneWinner, isTwoWinner, isThreeWinner, isFourWinner } = response;
				if (isOneWinner || isTwoWinner || isThreeWinner || isFourWinner) {
					this.toggle();
				}
			});
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}
	startNewGame = () => {
		window.location.reload(true);
	}

	renderModal(props) {
		const { isOneWinner, isTwoWinner, isThreeWinner, isFourWinner } = props;
		return (
			<Modal isOpen={this.state.modal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>BINGO RESULTS</ModalHeader>
					<ModalBody>
						<h5 style={{ color: isOneWinner ? 'green' : 'red'}}>
							Ticket ONE is {isOneWinner ? 'WINNER' : 'NOT A WINNER'}
						</h5>
						<h5 style={{ color: isTwoWinner ? 'green' : 'red'}}>
							Ticket TWO is {isTwoWinner ? 'WINNER' : 'NOT A WINNER'}
						</h5>
						<h5 style={{ color: isThreeWinner ? 'green' : 'red'}}>
							Ticket THREE is {isThreeWinner ? 'WINNER' : 'NOT A WINNER'}
						</h5>
						<h5 style={{ color: isFourWinner ? 'green' : 'red'}}>
							Ticket FOUR is {isFourWinner ? 'WINNER' : 'NOT A WINNER'}
						</h5>
					</ModalBody>
					<ModalFooter className="text-center">
						<Button color="secondary" onClick={this.startNewGame}>NEW GAME</Button>
					</ModalFooter>
			</Modal>
		)
	}

	render() {
		const { showClaim, loading, result } = this.props;
		if (!showClaim) {
			return null;
		}
		return (
			<Col md="12" className="text-center">
				{result && this.renderModal(result)}
				<Button
					onClick={this.validateBingo}
					disabled={loading}
					color="primary">
					{loading ? 'Claming....' : 'CLAIM BINGO'}
				</Button>
			</Col>
		);
  }
}

const mapStateToProps = state => ({
	loading: _get(state, 'app.loading'),
	result: _get(state, 'app.result'),
	showClaim:  (_get(state, 'tickets.oneBall.length', 0) >= 25) ||
				(_get(state, 'tickets.twoBall.length', 0) >= 25) ||
				(_get(state, 'tickets.threeBall.length', 0) >= 25) ||
				(_get(state, 'tickets.fourBall.length', 0) >= 25 )
});

const mapDispatchToProps = dispatch => bindActionCreators({
	validateBingo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClaimContainer);
