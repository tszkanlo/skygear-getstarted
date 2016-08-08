
import React from 'react';
import radium from 'radium';

import './Markdown.css';

import Style from './style.js';
import IconIos from '../../img/icon-ios.svg';
import IconAndroid from '../../img/icon-android.svg';
import IconWeb from '../../img/icon-web.svg';
import IconNew from '../../img/icon-new.svg';
import IconApp from '../../img/icon-app.svg';
const Icon = {
  ios: IconIos,
  android: IconAndroid,
  js: IconWeb,
  new: IconNew,
  existing: IconApp,
};

import TabItem from './TabItem.jade';
import GuideHeader from './GuideHeader.jade';
const RadiumTabItem = radium(TabItem);
const RadiumGuideHeader = radium(GuideHeader);

export default function GuidePage({ sdk, project, guideContent, setSDK, setProject }) {
  const sdkTabProps = { Style, Icon, current: sdk, update: setSDK };
  const projectTabProps = { Style, Icon, current: project, update: setProject };
  const docLink = `https://docs.skygear.io/${sdk}/guide`;
  return (
    <div style={Style.guidePage}>
      <RadiumGuideHeader Style={Style} docLink={docLink} window={window} >
        <RadiumTabItem {...sdkTabProps} target="ios" name="iOS" />
        <RadiumTabItem {...sdkTabProps} target="android" name="Android" />
        <RadiumTabItem {...sdkTabProps} target="js" name="Web" />
        <RadiumTabItem {...projectTabProps} target="new" name="New App" />
        <RadiumTabItem {...projectTabProps} target="existing" name="Existing App" />
      </RadiumGuideHeader>
      <article
        style={Style.content}
        className="Markdown"
        dangerouslySetInnerHTML={{ __html: guideContent }}
      />
    </div>
  );
}

GuidePage.propTypes = {
  sdk: React.PropTypes.string.isRequired,
  project: React.PropTypes.string.isRequired,
  guideContent: React.PropTypes.string.isRequired,
  setSDK: React.PropTypes.func.isRequired,
  setProject: React.PropTypes.func.isRequired,
};
