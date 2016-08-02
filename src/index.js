
import './google-fonts-lato-400-700.css';

import React from 'react';
import selectPage from './select-guide.js';


const pages = {
  ios: {
    new: require('./pages/ios-new'),
    existing: require('./pages/ios-existing'),
  },
  android: {
    new: require('./pages/android-new'),
    existing: require('./pages/android-existing'),
  },
  js: {
    new: require('./pages/js-new'),
    existing: require('./pages/js-existing'),
  },
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { sdk, guide } = props;
    if (!sdk && guide) throw Error('[skygear-getstarted] Error: SDK not specified');
    if (sdk && !pages[sdk]) throw Error(`[skygear-getstarted] No such SDK: ${sdk}`);
    if (guide && !pages[sdk][guide]) throw Error(`[skygear-getstarted] No such guide: ${guide}`);
    this.state = props;
  }

  get template() {
    const { sdk, guide } = this.state;
    if (pages[sdk] && pages[sdk][guide]) {
      return pages[sdk][guide];
    }
    return selectPage;
  }

  render() {
    const { sdk, guide } = this.state;
    return React.createElement(this.template, {
      sdk, guide,
      setSDK: ((sdk) => this.setState({sdk})).bind(this),
      setGuide: ((guide) => this.setState({guide})).bind(this),
    });
  }
}
