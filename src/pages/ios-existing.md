To add the Skygear iOS SDK to your existing project, you need to:

 1. install the SDK through CocoaPods
 2. configure the Skygear server endpoint and API key for the SDK

## Prerequisite

The installation requires
[Xcode](https://developer.apple.com/xcode/) and
[CocoaPods](https://cocoapods.org/). You can visit their websites to download
the latest versions.

## Step 1: Installing the SDK (SKYKit) using CocoaPods

### Creating the Podfile

If you have already created the [Podfile](https://guides.cocoapods.org/using/the-podfile.html)
before, you can skip this section and move ahead to add SKYKit to the `Podfile`
as explained in the next section.

To create the `Podfile`, you need to open the Terminal and navigate to the
directory that contains your iOS project using the cd command:
`cd ~/Path/To/Your/App`.
You can also set the path by dragging the folder icon to Terminal.

And then you can create the `Podfile` using:

``` bash
pod init
```

### Adding SKYKit to the Podfile

You can issue the following command in the Terminal to open the `Podfile` in Xcode.

```
open -a Xcode Podfile
```

Note: You should avoid using TextEdit to edit the Podfile because it may mess up the format and confuse CocoaPods.

You need to add the line `pod 'SKYKit'` to the file as in the example below. You need to replace `YourProjectName` with your actual project name.

```
use_frameworks!
platform :ios, '8.0'

target 'YourProjectName' do
    pod 'SKYKit'
end
```

CocoaPods 0.36 or higher introduces the `use_frameworks!` instruction, so the
[Objective-C bridging header](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html)
is no longer necessary if you're using Swift in your project.

### Installing SKYKit

After adding SKYKit to the `Podfile`, you can install the Skygear Android SDK
by:

``` bash
pod install
```

When the installation is complete, you can use the Xcode workspace
`YourProjectName.xcworkspace` to start developing with the SDK.

If you are using Swift, you can import the SDK in each file to use it.

## Step 2: Configuring Skygear server endpoint and API key

Before you make any API calls using the JS SDK, you must configure your skygear
container, `SKYContainer`, with your Skygear server endpoint and API key you get
from the [Skygear Portal](https://portal.skygear.io/app/info).

The configuration is done in the file `AppDelegate.m`:

- Import the SDK as `SKYKit`

  ```obj-c
  import <SKYKit/SKYKit.h>
  ```

- Add these lines in the `application:didFinishLaunchingWithOptions:` method.
Fill in your server endpoint and API key correspondingly.

  ```obj-c
  SKYContainer *container = [SKYContainer defaultContainer];
  [container configAddress:@"https://your-endpoint.skygeario.com/"]; //Your server endpoint
  [container configureWithAPIKey:@"SKYGEAR_API_KEY"]; //Your Skygear API Key
  ```
