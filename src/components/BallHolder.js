import React, { Component } from 'react';

const STYLES = {
    BALL: {
        borderRadius: 5,
        backgroundColor: 'white',
        padding: '5px 15px',
        display: 'inline-block',
        marginRight: 5,
        marginBottom: 5,
        textAlign: 'center',
        width: 60,
    },
    LAST_BALL: {
        border: '2px solid #007bff',
        fontWeight: 'bold',
        fontSize: 18
    }
}

class BallHolder extends Component {
    render() {
        const { content, lastBall = false } = this.props;
        const ballStyles = lastBall ?
                { ...STYLES.BALL, ...STYLES.LAST_BALL} :
                STYLES.BALL;

        if(!content) {
            return null;
        }
        return (
            <span style={ ballStyles }>{content}</span>
        );
  }
}

export default BallHolder;
