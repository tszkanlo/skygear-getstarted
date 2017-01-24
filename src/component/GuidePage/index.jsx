
import React from 'react';
import radium from 'radium';
import { canUseDOM } from 'exenv';

import markdownStyle from './Markdown.css';
import prismjsStyle from 'prism-themes/themes/prism-ghcolors.css';

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
const RadiumTabItem = radium(TabItem);

function GuidePage({
  sdk, project, hideSDKTabs, guideContent, setSDK, setProject,
}) {
  const docLinkShoudShow = canUseDOM &&
                           window.location.hostname !== 'localhost' &&
                           window.location.hostname !== 'docs.skygear.io' &&
                           window.location.hostname !== 'docs-staging.skygear.io';

  let heading;
  let sdkTabs;
  if (!hideSDKTabs) {
    heading = <h4 style={[Style.tagline]}>GET STARTED</h4>;
    sdkTabs = (
      <nav style={[Style.platform.row]}>
        <div style={[Style.platform.item]}>
          <RadiumTabItem
            Style={Style}
            Icon={Icon}
            current={sdk}
            update={setSDK}
            target="ios"
            name="iOS"
          />
        </div>
        <div style={[Style.platform.item]}>
          <RadiumTabItem
            Style={Style}
            Icon={Icon}
            current={sdk}
            update={setSDK}
            target="android"
            name="Android"
          />
        </div>
        <div style={[Style.platform.item]}>
          <RadiumTabItem
            Style={Style}
            Icon={Icon}
            current={sdk}
            update={setSDK}
            target="js"
            name="Web"
          />
        </div>
      </nav>
    );
  }

  let docLink;
  if (docLinkShoudShow) {
    docLink = (
      <a
        style={[Style.project.docLink]}
        href={`https://docs.skygear.io/${sdk}/guide`}
        target="_blank"
      >
        Read our Doc
      </a>
    );
  }

  return (
    <div style={Style.guidePage}>
      <style dangerouslySetInnerHTML={{ __html: markdownStyle }} />
      <style dangerouslySetInnerHTML={{ __html: prismjsStyle }} />
      <header>
        {heading}
        {sdkTabs}
        <nav
          style={[
            Style.project.row,
            docLinkShoudShow && Style.project.rowIncludeDocLink,
          ]}
        >
          <div style={[Style.project.item]}>
            <RadiumTabItem
              Style={Style}
              Icon={Icon}
              current={project}
              update={setProject}
              target="new"
              name="New App from Template"
            />
          </div>
          <div style={[Style.project.item]}>
            <RadiumTabItem
              Style={Style}
              Icon={Icon}
              current={project}
              update={setProject}
              target="existing"
              name="Start from Scratch"
            />
          </div>
          {docLink}
        </nav>
      </header>
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
  hideSDKTabs: React.PropTypes.bool,
};

export default radium(GuidePage);
