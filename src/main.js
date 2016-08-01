
import React from 'react';

import jadeNav from './nav.jade';
import jadeIosNew from './ios-new.jade';
import jadeIosExisting from './ios-existing.jade';
import jadeAndroidNew from './android-new.jade';
import jadeAndroidExisting from './android-existing.jade';
import jadeJsNew from './js-new.jade';
import jadeJsExisting from './js-existing.jade';

const pages = {
  ios: {
    new: jadeIosNew,
    existing: jadeIosExisting,
  },
  android: {
    new: jadeAndroidNew,
    existing: jadeAndroidExisting,
  },
  js: {
    new: jadeJsNew,
    existing: jadeJsExisting,
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
    return jadeNav;
  }

  render() {
    return React.createElement(this.template, this.state);
  }
}
