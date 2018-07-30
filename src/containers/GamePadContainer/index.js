import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'reactstrap';
import _get from 'lodash/get';
import RenderTicket from '../../components/RenderTicket';
import { updateOneBalls, updateTwoBalls, updateThreeBalls, updateFourBalls } from '../../actions/ticketActions.js'

const STYLES = {
    CONTENT: {
        padding: 5
    }
}

class GamePadContainer extends Component {
    render() {
        const { tickets, lastBall, previousBalls } = this.props;
        return (
            <Col md="12" style={{ marginTop: 50 }}>
                <Row>
                <Col md="6" style={ STYLES.CONTENT }>
                    <RenderTicket
                        lastBall={lastBall}
                        previousBalls={previousBalls}
                        tickets={tickets.oneBall}
                        balls={tickets.one}
                        handleClick={this.props.updateOneBalls}
                    />
                </Col>
                <Col md="6" style={ STYLES.CONTENT }>
                    <RenderTicket
                        lastBall={lastBall}
                        previousBalls={previousBalls}
                        tickets={tickets.twoBall}
                        balls={tickets.two}
                        handleClick={this.props.updateTwoBalls}
                    />
                </Col>
                <Col md="6" style={ STYLES.CONTENT }>
                    <RenderTicket
                        lastBall={lastBall}
                        previousBalls={previousBalls}
                        tickets={tickets.threeBall}
                        balls={tickets.three}
                        handleClick={this.props.updateThreeBalls}
                    />
                </Col>
                <Col md="6" style={ STYLES.CONTENT }>
                    <RenderTicket
                        lastBall={lastBall}
                        previousBalls={previousBalls}
                        tickets={tickets.fourBall}
                        balls={tickets.four}
                        handleClick={this.props.updateFourBalls}
                    />
                </Col>
                </Row>
            </Col>
        );
  }
}

const mapStateToProps = state => ({
    tickets: _get(state, 'tickets', {}),
    lastBall: _get(state, 'app.lastBall'),
    previousBalls: _get(state, 'app.previousBalls'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateOneBalls, updateTwoBalls, updateThreeBalls, updateFourBalls
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GamePadContainer);
