
import './google-fonts-lato-400-700.css';

import React from 'react';
import SelectPage from './component/SelectPage';
import GuidePage from './component/GuidePage';

import PageIosNew from './pages/ios-new.jade';
import PageIosExisting from './pages/ios-existing.jade';
import PageAndroidNew from './pages/android-new.jade';
import PageAndroidExisting from './pages/android-existing.jade';
import PageJsNew from './pages/js-new.jade';
import PageJsExisting from './pages/js-existing.jade';
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
    const GuideContent = Page[sdk] && Page[sdk][project];
    const template = (GuideContent) ? GuidePage : SelectPage;
    return React.createElement(template, {
      sdk, project, GuideContent,
      setSDK: ((targetSDK) => self.setState({ sdk: targetSDK })),
      setProject: ((targetProject) => self.setState({ project: targetProject })),
    });
  }
}

GetStarted.propTypes = {
  sdk: React.PropTypes.string,
  project: React.PropTypes.string,
};
