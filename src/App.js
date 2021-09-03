import React from 'react';
import Googletag from './Googletag';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

/*global chrome */

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googletagInfo: null
    }
  }

  componentDidMount() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var tabId = tabs[0].id;
      setTimeout(() => {
          var googletagInfo = chrome.extension.getBackgroundPage().checkResult[tabId];
          this.setState({ googletagInfo: googletagInfo });
      }, 3000)
    }.bind(this))
  }

  render() {
    return (
      <div className="index">
        <Router>
            <div className="content-router">
              <Switch>
                <Route exact path="/index.html"><Googletag googleTagInfo={ this.state.googletagInfo } /></Route>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default AppComponent;