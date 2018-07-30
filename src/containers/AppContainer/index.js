import React from 'react';
import { Route } from 'react-router-dom';
import BongoContainer from '../BongoContainer';

class App extends React.Component {
    render() {
      return (<div>
                <h4 style={{ padding: 20, textAlign: 'center' }}>BINGO</h4>
                <Route exact path="/" component={BongoContainer} />
              </div>
      )
    }
}

export default App;
