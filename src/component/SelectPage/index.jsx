
import React from 'react';
import radium, { StyleRoot } from 'radium';

import Style from './style.js';
import IconIos from '../../img/icon-ios.svg';
import IconAndroid from '../../img/icon-android.svg';
import IconWeb from '../../img/icon-web.svg';
import IconNew from '../../img/icon-new.svg';
import IconApp from '../../img/icon-app.svg';
import IconTick from '../../img/icon-tick.svg';
const Icon = {
  ios: IconIos,
  android: IconAndroid,
  js: IconWeb,
  new: IconNew,
  app: IconApp,
  tick: IconTick,
};

import SelectPlatform from './SelectPlatform.jade';
import PlatformOption from './PlatformOption.jade';
const RadiumSelectPlatform = radium(SelectPlatform);
const RadiumPlatformOption = radium(PlatformOption);

export default function SelectPage({ sdk, setSDK, setProject }) {
  const platformProps = { Style, Icon, sdk, setSDK, setProject };
  return (
    <StyleRoot>
      <RadiumSelectPlatform Style={Style} >
        <RadiumPlatformOption
          {...platformProps}
          targetSDK="ios"
          title="iOS"
          desc="Build an app for iPhone, iPad and Apple Watch"
        />
        <RadiumPlatformOption
          {...platformProps}
          targetSDK="android"
          title="Android"
          desc="Build an app for Android devices"
        />
        <RadiumPlatformOption
          {...platformProps}
          targetSDK="js"
          title="Web"
          desc="Develop cross platfrom browser-based app"
        />
      </RadiumSelectPlatform>
    </StyleRoot>
  );
}

SelectPage.propTypes = {
  sdk: React.PropTypes.string,
  setSDK: React.PropTypes.func.isRequired,
  setProject: React.PropTypes.func.isRequired,
};
