import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberHolder from './NumberHolder';

const STYLES = {
    CONTENT: {
        backgroundColor: 'white',
            margin: 10
    }
}

class RenderTicket extends Component {

    render() {
        const { balls, lastBall, previousBalls, tickets, handleClick } = this.props;
        return (
            <div style={ STYLES.CONTENT }>
                {balls && balls.map((e) =>
                        <NumberHolder
                            lastBall={lastBall}
                            previousBalls={previousBalls}
                            tickets={tickets}
                            content={e}
                            key={e}
                            handleClick={handleClick}
                        />
                    )
                }
            </div>
        );
    }
}


RenderTicket.propTypes = {
    handleClick: PropTypes.func
};

RenderTicket.defaultProps = {
    handleClick: () => {}
};

export default RenderTicket;
