
import React from 'react';

import IconAndroid from './img/icon-android.svg';
import IconIos from './img/icon-ios.svg';
import IconWeb from './img/icon-web.svg';
import IconNew from './img/icon-new.svg';
import IconApp from './img/icon-app.svg';
import IconTick from './img/icon-tick.svg';

import { SelectPlatform, SelectProjectType } from './select-guide.jade';

export default function SelectPage({ sdk, setSDK, setGuide }) {
  const Style = {
    selectPage: { fontFamily: "'Lato', sans-serif", padding: '24px' },
    header: {
      tagline: { color: '#4a4a4a', fontSize: '13px', margin: '0px' },
      title: { fontSize: '31px', margin: '17px 0px 13px' },
      subtitle: { fontSize: '16px', margin: '0px 0px 19px' },
    },
    ShowOnActive: class {
      constructor(targetSDK) {
        if (targetSDK !== sdk) this.display = 'none';
      }
    },
    platform: {
      Item: class {
        constructor(targetSDK) {
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
      },
      tick: { position: 'absolute', right: '18px', top: '24px' },
      icon: { position: 'absolute', top: '10px', left: '31px' },
      title: { fontSize: '16px', margin: '16px 0px 0px 101px' },
      desc: { fontSize: '12px', margin: '0px 0px 18px 101px' },
    },
    project: {
      row: { margin: '0px 0px 20px 101px' },
      column: { display: 'inline-block', width: '50%' },
      item: {
        color: '#fff',
        background: '#007bd4',
        width: '98%',
        display: 'inline-block',
        borderRadius: '6px',
        position: 'relative',
        cursor: 'pointer',
      },
      icon: { position: 'absolute', top: '12px', left: '17px' },
      title: { fontSize: '16px', margin: '11px 0px 0px 66px' },
      desc: { fontSize: '12px', margin: '0px 0px 14px 66px' },
    },
  };
  return React.createElement(SelectPlatform, {
    setSDK, Style, IconTick,
    IconAndroid, IconIos, IconWeb,
    SelectProjectType:
      (targetSDK) => React.createElement(
        SelectProjectType, {
          sdk: targetSDK, setGuide,
          IconNew, IconApp, Style,
        }
      ),
  });
}

SelectPage.propTypes = {
  sdk: React.PropTypes.string,
  setSDK: React.PropTypes.func.isRequired,
  setGuide: React.PropTypes.func.isRequired,
};
