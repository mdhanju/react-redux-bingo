import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'reactstrap';
import _get from 'lodash/get';
import BallHolder from '../../components/BallHolder';
import BallDice from '../../components/BallDice';
import { getNewBall } from '../../actions/appActions';

const STYLES = {
    CONTENT: {
            marginRight: 10,
            fontSize: 18
    }
}
class LastBallContainer extends Component {

    getNewBall = () => {
        this.props.getNewBall();
    }

    render() {
        const { lastBall } = this.props;
        return (
            <Col md="4">
                <span style={ STYLES.CONTENT }>Last Ball</span>
                <BallHolder
                    content={lastBall}
                    lastBall={true}
                />
                <BallDice
                    getNewBall={ this.getNewBall}
                    content={lastBall}
                    lastBall={true}
                />
            </Col>
    );
  }
}

const mapStateToProps = state => ({
    lastBall: _get(state, 'app.lastBall', {}),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getNewBall
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LastBallContainer);
