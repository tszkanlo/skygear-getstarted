
<a name="sdk-existing"></a>
## For existing project

The installation requires Xcode and [CocoaPods](https://cocoapods.org/).
If you haven't installed them already, please head to [this section](#new-project) to read about how to create a new project with configured SDK.

### Step 1: Install SDK using CocoaPods

To install the Skygear iOS SDK as your iOS application dependency:

1. You need to close Xcode.
2. Open Terminal and navigate to the directory that contains your iOS
   project by using the cd command: `cd ~/Path/To/Your/App`.
   You can just drag the file icon to Terminal and the path will be
   automatically typed for you.
3. Run this command in Terminal `pod init` to create a [Podfile](https://guides.cocoapods.org/using/the-podfile.html).
4. Run this command in Terminal `open -a Xcode Podfile` to edit the Podfile using Xcode. You should avoid using TextEdit to edit the Podfile because it may mess up the format and confuse CocoaPods.

### Step 2: Edit the Podfile

1. Open and edit the `Podfile` file. Your `Podfile` file should look like this:

	```
	use_frameworks!
	platform :ios, '8.0'
	
	target 'YourProjectName' do
	    pod 'SKYKit'
	end
	```
	Replace `'YourProjectName'` with your actual project name.

	CocoaPods 0.36 and above introduces the `use_frameworks!` instruction, so
	the Objective-C bridging header is no longer needed if you're using Swift in
	your project.

2. Run `pod install` in your terminal.
3. You would see that an Xcode Workspace file is created. Open the file and go to the project.
4. It's done! You have installed Skygear SDK in your app. If you're using Swift, just import the SDK in each Swift file to call the SDK.

### Step 3: Configure end point and API key

Now, you are going to setup the server endpoint and API key for your app. Read more about [SKYContainer](#skycontainer).

In `AppDelegate.m`, include `SKYKit`:

```obj-c
import <SKYKit/SKYKit.h>
```

Then add these lines in the `application:didFinishLaunchingWithOptions:` method:

```obj-c
SKYContainer *container = [SKYContainer defaultContainer];
[container configAddress:@"https://your-endpoint.skygeario.com/"]; //Your server endpoint
[container configureWithAPIKey:@"SKYGEAR_API_KEY"]; //Your Skygear API Key
```

Replace `your-endpoint.skygeario.com` with your Server Endpoint and `SKYGEAR_API_KEY` with your API Key.