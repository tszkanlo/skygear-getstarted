
<a name="sdk-new"></a>
## For New Project

### Step 1: Install Xcode

Download the latest version of Xcode from the Mac App Store [here](https://itunes.apple.com/en/app/xcode/id497799835?mt=12).

### Step 2: Install CocoaPods

CocoaPods manages library dependencies for your Xcode projects.

The dependencies for your projects are specified in a single text file called a Podfile.
CocoaPods will resolve dependencies between libraries, fetch the resulting source code, then link it together in an Xcode workspace to build your project.

You can read more about CocoaPods [here](https://guides.cocoapods.org/using/getting-started.html).

Installing CocoaPods is very simple:

1. Open terminal.
2. Run this command `$ sudo gem install cocoapods`.
3. Wait for it to complete the process. It should take a few minutes.

### Step 3: Create new project

1. Open terminal and run this command `pod lib create --silent --template-url=https://github.com/SkygearIO/skygear-Scaffolding-iOS.git "YourProjectName"`. Change `"YourProjectName"` to something you like.
2. You will then be prompted a few questions, please make sure that you answer these questions correctly:

- What is your skygear endpoint?
- What is your skygear API key?
- What language do you want to use?

### We're done, Woo-hoo!
Congratulations, you have your first Skygear iOS project set up! The SDK is automatically included for you. Your project will be automatically launched.