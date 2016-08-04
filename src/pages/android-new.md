### Step 1: Installing Android Studio

We recommend developing Android apps with Skygear Android SDK using
[Android Studio](https://developer.android.com/studio/index.html).

### Step 2: Downloading scaffolding project

Download the repository on GitHub
[SkygearIO/skygear-Scaffolding-Android](https://github.com/SkygearIO/skygear-Scaffolding-Android).
After you have done so, launch Android Studio,
select **Open an existing Android Studio project** and find the scaffolding
project you have just downloaded. Follow any recommendations Android Studio
shows (such as installing the required SDKs) and then you are good to go.

### Step 3: Configure container

Have your `Server EndPoint` and `API Key` ready, open `Terminal` (which can
be found at the bottom of Android Studio), and run the following:

``` bash
./gradlew updateAppSettings
```

And you should see the following:

```
> Building 0% > :updateAppSettings
What is your skygear endpoint (You can find it in portal)?
Example: https://myapp.skygeario.com/
> https://<your-app-name>.skygeario.com/

What is your skygear API key (You can find it in portal)?
Example: dc0903fa85924776baa77df813901efc
> <your-api-key>
:updateAppSettings

BUILD SUCCESSFUL

Total time: 21.326 secs
```

The script is just modifying `MyApplication.java` file, so you
can manually change the configurations as well.

### We're done, Woo-hoo!

Congratulations, you have your first skygear Android project set up! You
can now launch your App on the emulator and it should look like the following:

[![Screenshot: android scaffolding app preview](/assets/android/android-app-preview.png)](/assets/android/android-app-preview.png)
