import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'reactstrap';
import _get from 'lodash/get';
import { getAllBalls } from '../../actions/ticketActions'
import BallHolder from '../../components/BallHolder';

const STYLES = {
    CONTENT: {
            marginRight: 10,
            fontSize: 12,
    },
    BALL_HOLDER: {
            marginTop: 5
    }
}

class RecentBallContainer extends Component {

    componentDidMount() {
        this.props.getAllBalls();
    }

    render() {
        const { previousBalls, lastBall } = this.props;
        return (<Col md="8">
                <div style={ STYLES.CONTENT }>PREVIOUS BALLS</div>
                <div style={ STYLES.BALL_HOLDER }>
                    {previousBalls && previousBalls.map((item, i) =>
                        (lastBall !== item) && <BallHolder
                            key={`${i}-${item}`}
                            content={item}
                            lastBall={false}
                        />)
                    }
                </div>
            </Col>
        );
    }
}

const mapStateToProps = state => ({
    loading: _get(state, 'app.loading', {}),
    lastBall: _get(state, 'app.lastBall'),
    previousBalls: _get(state, 'app.previousBalls', []),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllBalls
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecentBallContainer);
