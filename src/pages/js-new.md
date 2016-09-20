If you want to create a new web app that uses Skygear, you can use the Skygear
generator to scaffold a new one with
[React.js](https://facebook.github.io/react/), [Babel 6](https://babeljs.io/),
[webpack](https://webpack.github.io/) and Skygear. After creating the
scaffolding app, you will have a web app configured with your Skygear server
endpoint and API key, with basic authentication functions for a user to sign up,
log in and log out, implemented using the JS SDK.

## Prerequisite

You will need [Node.js](https://nodejs.org) for running the scaffolding
generator. Our supported versions are `node6+` and `npm3+`.

You can install it by the following:

``` bash
# for MacOS
brew install node

# for Debian/Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

If you are using a different operating system, please visit
[Node.js downloads](https://nodejs.org/en/download) for instructions.
If the bash shell is not available on your machine (such as Windows),
we recommend using [GitBash](https://git-scm.com/downloads).

## Installing and running the scaffolding generator

After Node.js is installed, you can proceed with installing and running the
[yeoman Skygear scaffolding generator](https://github.com/SkygearIO/generator-skygear).

``` bash
# install yeoman and skygear generator globally
npm install -g yo
npm install -g generator-skygear

# create your project folder
mkdir new-skygear-project
cd new-skygear-project

# generate your project
yo skygear
```

The generator will ask you a few questions to help you configure your app and
Skygear automatically.

### 1. Skygear server endpoint and API key

You can obtain the Skygear endpoint and API key from the
[Skygear Portal](https://portal.skygear.io/app/info). Make sure you include
the trailing slash in your endpoint.

<pre><code class="language-bash">? What is your skygear endpoint? (You can find it in portal) <span class="token keyword">https://&lt;your-app-name&gt;.skygeario.com/</span>
? What is your skygear API key (You can find it in portal) <span class="token keyword">&lt;your-api-key&gt;</span></code></pre>

### 2. App configuration

These are the configurations for setting up the React.js and webpack
environment.

<pre><code class="language-bash">? Please choose your application name <span class="token keyword">&lt;your-app-name&gt;</span>
? Which style language do you want to use? <span class="token keyword">css/sass/scss/less/stylus</span>
? Enable postcss? <span class="token keyword">yes/no</span></code></pre>

### 3. Overwriting files for Skygear configuration

The Skygear scaffolding generator needs to rewrite several files to configure
Skygear for you. You need to confirm the overwriting operations to proceed.

<pre><code class="language-bash">? Overwrite src/components/Main.js? <span class="token keyword">y</span>
? Overwrite src/config/base.js? <span class="token keyword">y</span>
? Overwrite src/index.js? <span class="token keyword">y</span>
? Overwrite cfg/base.js? <span class="token keyword">y</span></code></pre>


## We're done, Woo-hoo!

To launch your web app, run

``` bash
npm start
```

Congratulations, you have your first skygear web project set up!
React.js, Babel 6 and Webpack have been set up for you; the Skygear container
has also been configured with your server endpoint and API key.
You should see the following in your browser by following the link at shell.

[![Screenshot: js scaffolding app preview](https://docs.skygear.io/assets/js/js-app-preview.png)](https://docs.skygear.io/assets/js/js-app-preview.png)
