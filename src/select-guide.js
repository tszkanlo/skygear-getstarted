
import React from 'react';

import IconAndroid from './img/icon-android.svg';
import IconIos from './img/icon-ios.svg';
import IconWeb from './img/icon-web.svg';
import IconNew from './img/icon-new.svg';
import IconApp from './img/icon-app.svg';
import IconTick from './img/icon-tick.svg';

import { SelectGuide, SelectGuideType } from './select-guide.jade';

export default function SelectPage({ sdk, setSDK, setGuide }) {
  function PlatformStyle(targetSDK) {
    const active = (targetSDK === sdk);
    if (!active) this.cursor = 'pointer';
    const color = active ? '#007bd4' : '#979797';
    this.color = this.fill = color;
    this.border = `1px solid ${color}`;
    this.borderRadius = '6px';
    this.marginTop = '16px';
    this.overflow = 'auto';
    this.position = 'relative';
  }

  const guideStyle = {
    color: '#fff',
    background: '#007bd4',
    marginRight: '8px',
    width: '48%',
    display: 'inline-block',
    borderRadius: '6px',
    position: 'relative',
    cursor: 'pointer',
  };

  class ShowOnActive {
    constructor(targetSDK) {
      if (targetSDK !== sdk) this.display = 'none';
    }
  }
  class PlatformTickStyle extends ShowOnActive {
    constructor(targetSDK) {
      super(targetSDK);
      this.position = 'absolute';
      this.top = '24px';
      this.right = '18px';
    }
  }
  class GuideSelectStyle extends ShowOnActive {
    constructor(targetSDK) {
      super(targetSDK);
      this.clear = 'both';
      this.margin = '0px 0px 20px 101px';
    }
  }

  return React.createElement(SelectGuide, {
    setSDK, PlatformStyle, PlatformTickStyle,
    IconAndroid, IconIos, IconWeb, IconTick,
    SelectGuideType:
      (targetSDK) => React.createElement(SelectGuideType, {
        sdk: targetSDK, setGuide, IconNew, IconApp,
        GuideSelectStyle, guideStyle,
      }),
  });
}

SelectPage.propTypes = {
  sdk: React.PropTypes.string.isRequired,
  setSDK: React.PropTypes.func.isRequired,
  setGuide: React.PropTypes.func.isRequired,
};
