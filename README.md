# Skygear 'Getting Started' Component

## Install

1. `git submodule add <this repo> <location>`
2. `git submodule update --init`
3. `<location>` is now a npm module you can require from your project.

## Usage

```jsx
import SkygearGetStarted from 'skygear-getstarted';

// Usage:
<SkygearGetStarted />                           // select SDK page
<SkygearGetStarted sdk="ios" />                 // select project type page
<SkygearGetStarted sdk="ios" project="new" />   // project page

// Throws Error:
<SkygearGetStarted sdk="none" />                // non-existent SDK
<SkygearGetStarted sdk="ios" project="none" />  // non-existent project type
<SkygearGetStarted project="new" />             // SDK not defined

```

## Development

1. `[~]> git clone ...`
2. `[~/skygear-getstarted]> ln -sf ../../pre-commit.sh .git/hooks/pre-commit`
3. `[~/skygear-getstarted]> npm install`


* `npm run lint` to check syntax.
* `npm run dev` to start local dev server.
* `npm run build` to build artifact. (see below)

**IMPORTANT NOTE:**

This repository contains a pre-commit hook (`pre-commit.sh`) that will:

* run `eslint`
* build artifact (`dist/skygear-getstarted.js`)
* add artifact to the commit

This is to ensure that the artifact is in-sync with the source code. Errors in the linting and building steps will abort the commit.
