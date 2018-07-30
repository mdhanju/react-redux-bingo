import React, { Component } from 'react';
import { Button } from 'reactstrap';

const STYLES = {
    BUTTON: {
        marginTop: -4
    }
}

class BallDice extends Component {
    render() {
        return (
            <Button
                onClick={this.props.getNewBall}
                style={ STYLES.BUTTON }
                color="primary">SPIN
            </Button>
        );
  }
}

export default BallDice;
