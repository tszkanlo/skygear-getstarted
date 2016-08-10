If you want to create a new iOS app that uses Skygear, you can follow this
guide to scaffold a new one with the Skygear iOS SDK installed. After creating
the scaffolding app, you will have an iOS app configured with your Skygear
server endpoint and API key, with basic authentication functions for a user
to sign up, log in and log out, implemented using the iOS SDK.

## Prerequisite

### Xcode

[Xcode](https://developer.apple.com/xcode/) is an IDE for developing iOS apps.
You can download the
[latest version of Xcode](https://itunes.apple.com/en/app/xcode/id497799835?mt=12)
from the Mac App Store.

### CocoaPods

[CocoaPods](https://cocoapods.org/) manages the library dependencies for your
Xcode projects.

You can install CocoaPods by opening the terminal and run the command below.
It may take a few minutes to complete.

``` bash
sudo gem install cocoapods
```

## Creating a new iOS app project

1. Before creating the iOS app project, you need to make sure the Specs Repo is up-to-date:
   ``` bash
   pod repo update
   ```
2. You can then create the scaffolding project by `pod lib create` using the
   Skygear scaffolding template. You should change `YourProjectName` to your
   preferred one in the command below:
   ``` bash
   pod lib create --silent --template-url=https://github.com/SkygearIO/skygear-Scaffolding-iOS.git "YourProjectName"
   ```
3. You will be prompted with a few questions for setting up the project:
 - #### Skygear server endpoint and API key

    You can obtain the Skygear endpoint and API key from the
    [Skygear Portal](https://portal.skygear.io/app/info).
<pre><code class="language-bash">What is your skygear endpoint (You can find it in portal)?
Example: https://myapp.skygeario.com
 &gt; <span class="token keyword">https://myapp.skygeario.com</span><br/>
What is your skygear API key (You can find it in portal)?
Example: dc0903fa85924776baa77df813901efc
 &gt; <span class="token keyword">&lt;your-api-key&gt;</span></code></pre>

 - #### Programming language

    You can choose between using Swift or Objective-C.
<pre><code class="language-bash">What language do you want to use?? [ Swift / ObjC ]
 &gt; <span class="token keyword">ObjC</span></code></pre>

 - #### Class prefix (only applicable for using Objective-C)

    You need to specify a 3-letter
    [class prefix](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Conventions/Conventions.html)
    for your code if you are using Objective-C.
<pre><code class="language-bash">What is your class prefix?
 &gt; <span class="token keyword">YPN</span></code></pre>


## We're done, Woo-hoo!
Congratulations, you have your first Skygear iOS project set up! The iOS SDK
has been installed; and the container `SKYContainer` has been configured with
your server endpoint and API key. You can run the app using the emulator, which
should show the following screen:

[![Screenshot: iOS SDK scaffolding app](https://docs.skygear.io/assets/ios/ios-app-preview.png)](https://docs.skygear.io/assets/ios/ios-app-preview.png)
