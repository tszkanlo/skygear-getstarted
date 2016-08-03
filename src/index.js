
import './google-fonts-lato-400-700.css';

import React from 'react';
import selectPage from './select-page.jsx';

/* eslint-disable global-require, import/no-unresolved */
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
/* eslint-enable global-require, import/no-unresolved */

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { sdk, project } = props;
    if (!sdk && project) {
      throw Error('[skygear-getstarted] Error: SDK not specified');
    }
    if (sdk && !pages[sdk]) {
      throw Error(`[skygear-getstarted] No such SDK: ${sdk}`);
    }
    if (project && !pages[sdk][project]) {
      throw Error(`[skygear-getstarted] No such project: ${project}`);
    }
    this.state = props;
  }

  get template() {
    const { sdk, project } = this.state;
    if (pages[sdk] && pages[sdk][project]) {
      return pages[sdk][project];
    }
    return selectPage;
  }

  render() {
    const { sdk, project } = this.state;
    const self = this;
    return React.createElement(this.template, {
      sdk, project,
      setSDK: ((targetSDK) => self.setState({ sdk: targetSDK })),
      setProject: ((targetProject) => self.setState({ project: targetProject })),
    });
  }
}
