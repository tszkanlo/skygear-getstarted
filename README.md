# Skygear 'Getting Started' Component

## Install

1. `git submodule add <this repo> <location>`
2. `git submodule update --init`
3. `<location>` is now a npm module you can require from your project.

## Usage

```jsx
import SkygearGetStarted from 'skygear-getstarted';

<!-- Usage: -->
<SkygearGetStarted />                        --> select SDK page
<SkygearGetStarted sdk="ios" />              --> select project type page
<SkygearGetStarted sdk="ios" guide="new" />  --> guide page

<!-- Throws Error: -->
<SkygearGetStarted sdk="none" />
<SkygearGetStarted sdk="ios" guide="none" />
<SkygearGetStarted guide="new" />

```

## Development

1. `[~]> git clone ...`
2. `[~/skygear-getstarted]> ln -sf ../../pre-commit.sh .git/hooks/pre-commit`
3. `[~/skygear-getstarted]> npm install`


* `npm run lint` to check syntax.
* `npm run dev` to start local dev server.
* `npm run build` to build artifact. (see below)

**IMPORTANT NOTE:**

**This repo contains a pre-commit hook (`pre-commit.sh`) that will build and add
`dist/skygear-getstarted.js` automatically. You need to update this hook if the artifact is moved / renamed.**

