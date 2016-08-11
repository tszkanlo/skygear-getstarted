To add the Skygear JS SDK to your existing project, you need to:

 1. install (and import) the SDK
 2. configure the Skygear server endpoint and API key for the SDK

## Step 1: Installing the SDK

The JS SDK can be easily integrated with your existing project using several
ways: as HTML5 project, Node.js project, webpack project or React Native
project.

### HTML5 project

The Skygear JS SDK can be included as a minified external script through CDN,
like the following:

``` html
<script src="//code.skygear.io/js/polyfill/latest/polyfill.min.js"></script>
<script src="//code.skygear.io/js/skygear/latest/skygear.min.js"></script>
<script>
  console.log(skygear); // the skygear container
</script>
```

In this way, you will have the Skygear container object as `skygear` in the
global scope.

The polyfill, which should be placed before the `skygear.min.js`, is used to
implant HTML5 functionality in browsers that don't natively support them.

### Node.js project

Skygear JS SDK can be directly used in Node.js environment. Simply install it
via [npm](https://www.npmjs.com) and use it in your project.

``` bash
npm install skygear --save
```

``` javascript
import skygear from 'skygear';
```

If you are using Node.js v0.x, you need to include
[Babel Polyfill](https://babeljs.io/docs/usage/polyfill/) before importing the
Skygear SDK.

``` bash
npm install babel-polyfill --save-dev
```

``` javascript
require('babel-polyfill');
import skygear from 'skygear';
```

### Webpack project

If you are using [webpack](https://webpack.github.io/) to bundle your modules,
you need to configure it correctly to make Skygear work in the web environment.

In your webpack configuration file (by default `webpack.config.js`), add the
following lines in the externals, like the followings:

``` javascript
module.exports = {
  /* your own configurations */
  externals: {
    'react-native': 'undefined',  // don't include react-native
    'websocket': 'undefined'      // don't include node.js websocket
  }
}
```

### React Native project

The SDK works well with
[React Native](https://facebook.github.io/react-native/).
With an existing React Native project, simply do

``` bash
npm install --save skygear
```

and then you can import the SDK in your `index.ios.js` and `index.android.js`
by:

``` javascript
import skygear from 'skygear'
```

<a name="set-up-app"></a>
## Step 2: Configuring the Skygear server endpoint and API key

Before you make any API calls using the JS SDK, you must configure your skygear
container, `skygear`, with your Skygear server endpoint and API key you get from
the [Skygear Portal](https://portal.skygear.io/app/info).

``` javascript
skygear.config({
  'endPoint': 'https://<your-app-name>.skygeario.com/', // trailing slash is required
  'apiKey': '<your-api-key>',
}).then(() => {
  console.log('skygear container is now ready for making API calls.');
}, (error) => {
  console.error(error);
});
```
