
import React from 'react';

import IconAndroid from './icon-android.svg';
import IconIos from './icon-ios.svg';
import IconWeb from './icon-web.svg';
import IconNew from './icon-new.svg';
import IconApp from './icon-app.svg';
import IconTick from './icon-tick.svg';

import template from './template.jade';

export default function (props) {
  const { sdk, guide } = props;
  return React.createElement(template, {
    sdk, guide, IconAndroid, IconIos,
    IconWeb, IconNew, IconApp, IconTick,
  });
}
