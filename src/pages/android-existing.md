### Step 1: Installing SDK

Make sure jcenter repository is included in `build.gradle` of your project

```gradle
allprojects {
    repositories {
        jcenter()
    }
}
```

Add skygear as dependency in `build.gradle` of your application

```gradle
dependencies {
    // other dependencies
    compile 'io.skygear:skygear:+'
}
```

### Step 2: Configuring container

After you have installed the SDK, you must configure
your skygear container with the `Server EndPoint` and `API Key` you get on
Skygear Developer Portal **BEFORE** you make any API calls.

#### Option 1: Using `SkygearApplication` as custom application

Create custom class extends `SkygearApplication`

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

Update `AndroidManifest.xml`
- add `android:name` attribute to `application` tag
- add `android.permission.INTERNET` permission

```html
<uses-permission android:name="android.permission.INTERNET" />
<application
    android:name=".MyApplication"
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:supportsRtl="true"
    android:theme="@style/AppTheme">
    <!-- different activities ... -->
</application>
```

#### Option 2: Setting up when your application starts

If you have your own custom application class, you can set up skygear
when your application starts.

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

        // your code...
    }
}
```

Also, you need to make sure your application has grant
`android.permission.INTERNET` permission in `AndroidManifest.xml`.

```html
<uses-permission android:name="android.permission.INTERNET" />
```
