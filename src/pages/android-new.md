If you want to create a new Android app that uses Skygear, you can follow this
guide to scaffold a new one with the Skygear Android SDK installed. After
creating the scaffolding app, you will have an Android app configured with your
Skygear server endpoint and API key, with basic authentication functions for a
user to sign up, log in and log out, implemented using the Android SDK.

To create the new Android app with the Android SDK, you need to:

1. download the scaffolding Android Studio project
2. configure the Skygear server endpoint and API key for the SDK

## Prerequisite

### Android Studio

You will need
[Android Studio](https://developer.android.com/studio/index.html)
to open the Skygear scaffolding Android Studio project.

After downloading Android Studio, you can launch it to complete the setup,
which includes downloading Android SDK components that are required for
development. You can find the detailed instructions from its
[documentation](https://developer.android.com/studio/install.html).

## Step 1: Downloading the scaffolding Android Studio project

You can download the scaffolding project from GitHub:
[SkygearIO/skygear-Scaffolding-Android](https://github.com/SkygearIO/skygear-Scaffolding-Android).
You will want to rename the folder to your desired project name.
After you have done so, open it in Android Studio by selecting
**Open an existing Android Studio project**.

## Step 2: Configuring the Skygear server endpoint and the API key

To enable the Android SDK to communicate with your Skygear server, you need to
configure the server endpoint and the API key.
The scaffolding project comes with a Gradle wrapper task `updateAppSettings`
which can set the configurations for you. To run the task:

- Open the Terminal inside Android Studio
- Run the following command:
  ```
  ./gradlew updateAppSettings
  ```

  You will be prompted for entering the Skygear server endpoint and the API key,
  which can be obtained from the
  [Skygear Portal](https://portal.skygear.io/app/info).
<pre><code class="language-bash">What is your skygear endpoint (You can find it in portal)?
Example: https://myapp.skygeario.com/
&gt; <span class="token keyword">https://&lt;your-app-name&gt;.skygeario.com/</span><br/>
What is your skygear API key (You can find it in portal)?
Example: dc0903fa85924776baa77df813901efc
&gt; <span class="token keyword">&lt;your-api-key&gt;</span></code></pre>

The configurations are stored in the file `MyApplication.java`, so
you can also choose to manually modify the settings there.

### We're done, Woo-hoo!

Congratulations, you have your first Skygear Android project set up! The
Android SDK has been installed and is configured with your server endpoint and
API key. You can now launch your App on the emulator, which should look like the
following:

[![Screenshot: android scaffolding app preview](https://docs.skygear.io/assets/android/android-app-preview.png)](https://docs.skygear.io/assets/android/android-app-preview.png)
