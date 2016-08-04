Following the steps below will help you set up a new scaffolding project with
Skygear JS SDK. React.js, Babel 6 and Webpack are also automatically
included and configured.

### Step 1: Installing Node.js

We recommend setting up the build system using [Node.js](https://nodejs.org).
To install `node` and package manager `npm`, simply do:

``` bash
# for MacOS
brew install node

# for Debian/Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

If you are using a different operating system, please see this
[page](https://nodejs.org/en/download) for installing Node.js.
If bash shell is not available on your machine (such as Windows),
we recommend using [GitBash](https://git-scm.com/downloads).

### Step 2: Installing and running yeoman generator

After Node.js is installed, we suggest using [Yeoman](http://yeoman.io/) to
dynamically generate your project. Make use you have your Skygear
`Server EndPoint` and `API Key` ready before you proceed.

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

### Step 3: Answering the questions for generator

You will then be prompted a few questions, please make sure that you
answer these questions correctly:
- What is your skygear endpoint?
- What is your skygear API key?
- Please choose your application name?
- Overwrite `<some-path>/<some-file>.js`? (confirm to overwrite)

### We're done, Woo-hoo!

Congratulations, you have your first skygear web project set up!
[React.js](https://facebook.github.io/react/), [Babel](https://babeljs.io/)
and [Webpack](https://webpack.github.io/) are automatically included for you.
To launch your first application, simply do `npm start`.

<a name="whats-next"></a>
## What's Next

Now you've learned how to start developing with Skygear, check out the SDK docs to learn some of the concepts behind Skygear:

- Learn to make [Authentication](/js/guide/users)
- Learn to CRUD [Records](/js/guide/record)
- Learn to make [Queries](/js/guide/query)
- Take a [Quick Glance](/js/guide/quick-glance) at SDK
