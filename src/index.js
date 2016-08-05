
import './google-fonts-lato-400-700.css';
import 'prism-themes/themes/prism-ghcolors.css';

import React from 'react';
import SelectPage from './component/SelectPage';
import GuidePage from './component/GuidePage';

import PageIosNew from './pages/ios-new.md';
import PageIosExisting from './pages/ios-existing.md';
import PageAndroidNew from './pages/android-new.md';
import PageAndroidExisting from './pages/android-existing.md';
import PageJsNew from './pages/js-new.md';
import PageJsExisting from './pages/js-existing.md';
const Page = {
  ios: {
    new: PageIosNew,
    existing: PageIosExisting,
  },
  android: {
    new: PageAndroidNew,
    existing: PageAndroidExisting,
  },
  js: {
    new: PageJsNew,
    existing: PageJsExisting,
  },
};

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    const { sdk, project } = props;
    if (!sdk && project) {
      throw Error('[skygear-getstarted] Error: SDK not specified');
    }
    if (sdk && !Page[sdk]) {
      throw Error(`[skygear-getstarted] No such SDK: ${sdk}`);
    }
    if (project && !Page[sdk][project]) {
      throw Error(`[skygear-getstarted] No such project: ${project}`);
    }
    this.state = props;
  }

  render() {
    const self = this;
    const { sdk, project } = this.state;
    const guideContent = Page[sdk] && Page[sdk][project];
    const template = (guideContent) ? GuidePage : SelectPage;
    return React.createElement(template, {
      sdk, project, guideContent,
      setSDK: ((targetSDK) => self.setState({ sdk: targetSDK })),
      setProject: ((targetProject) => self.setState({ project: targetProject })),
    });
  }
}

GetStarted.propTypes = {
  sdk: React.PropTypes.string,
  project: React.PropTypes.string,
};
