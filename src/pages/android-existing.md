To add the Skygear Android SDK to your existing project, you need to:

 1. install the SDK by adding Skygear as a dependency
 2. configure the Skygear server endpoint and API key for the SDK
 3. update the app manifest

## Step 1: Installing SDK

- First, you need to make sure the JCenter Maven repository is included in the
  file `build.gradle` of your project (NOT the `build.gradle` of the module).

  ```gradle
  allprojects {
      repositories {
          jcenter()
      }
  }
  ```

- Next, you need to add Skygear as a dependency by including
  `io.skygear:skygear+` in the dependency list in the file `build.gradle`
  of your module (NOT the `build.gradle` of the project).

```gradle
dependencies {
    // other dependencies
    compile 'io.skygear:skygear:+'
}
```

- You will be hinted for a project sync since you have updated the gradle file.
  After syncing, the Android SDK has been installed successfully.

## Step 2: Configuring the Skygear server endpoint and the API key

To enable the Android SDK to communicate with your Skygear server, you need to
configure the server endpoint and the API key, which you can obtain from the
[Skygear Portal](https://portal.skygear.io/app/info).

There are two methods you can configure your SDK.

### Method 1: A custom application that extends `SkygearApplication`

By making your application extend `SkygearApplication`, you can simply
override the two methods `getSkygearEndpoint` and `getApiKey`. The
`SkygearApplication` will then configure the SDK for you.

Assuming your custom application is defined in the file `MyApplication.java`:

``` java
import io.skygear.skygear.SkygearApplication;

public class MyApplication extends SkygearApplication {
    @Override
    public String getSkygearEndpoint() {
        return "https://<your-app-name>.skygeario.com/";
    }

    @Override
    public String getApiKey() {
        return "<your-api-key>";
    }
}
```

### Method 2: Building the config when the application starts

If you have your own custom application class, you can configure the container
with your Skygear server endpoint and the API key in `onCreate` of the
`Application`. An example is shown below:

``` java
import io.skygear.skygear.Container;
import io.skygear.skygear.Configuration;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        Configuration config = new Configuration.Builder()
                .endPoint("https://<your-app-name>.skygeario.com/")
                .apiKey("<your-api-key>")
                .build();

        Container.defaultContainer(this).configure(config);
    }
}
```

## Step 3: Updating the App Manifest

For the Android SDK to work, you also need to make sure these two things are
set in the `AndroidManifest.xml`:

1. You need to include the `android.permission.INTERNET` permission.
   This is for allowing the SDK to communicate with the Skygear server.
2. You need to specify the class used as the `Application` subclass through the
   `android:name` attribute of the `application` tag. _Note: you may not
   need to do this if you have an existing application defined._

The updated `AndroidManifest.xml` should contain the following:

```html
<uses-permission android:name="android.permission.INTERNET" />
<application
    android:name=".MyApplication">
</application>
```
