import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const STYLES = {
    BALL: {
        width: '20%',
        padding: '10px',
        cursor: 'pointer',
        textAlign: 'center',
        display: 'inline-block',
        border: '1px solid #dee2e6'
    },
    ACTIVE_BALL: {
        backgroundColor: '#007bff',
        color: 'white'
    }
}

class NumberHolder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.lastBall !== prevProps.lastBall) {
            const content = this.props.content;
            if (this.props.previousBalls.find((e) => e === content)) {
                const tickets = this.props.tickets;
                tickets.push(content);
                this.props.handleClick(_.uniq(tickets));
            }
        }
    }

    handleActive = (ticket) => {
        this.setState({ active: !this.state.active });
        const tickets = this.props.tickets

        tickets.push(ticket)
        this.props.handleClick( tickets )
    }

    render() {
        const { content, previousBalls } = this.props;
        const { active } = this.state;
        const showActive = previousBalls.find((e) => e === content)
        const ballStyles = (active || showActive) ?
                { ...STYLES.BALL, ...STYLES.ACTIVE_BALL} :
                STYLES.BALL;

        return (
            <a
                style={ ballStyles }
                >{content}
            </a>
        );
  }
}

NumberHolder.propTypes = {
    handleClick: PropTypes.func
};

NumberHolder.defaultProps = {
    handleClick: () => {}
};

export default NumberHolder;
