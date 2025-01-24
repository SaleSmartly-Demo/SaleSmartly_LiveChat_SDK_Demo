# SaleSmartly_Demo

该项目主要存放一些使用插件的相关demo项目

1. **ios_webview**
   该文件夹为原生iOS项目。
   使用xcode运行项目，采用插入webview的形式加载web链接。
   所需权限请关注ios_webview/plugin-ios/Info.plist文件
2. **flutter_webview**
   该文件夹为flutter项目。
   推荐使用vs code编辑器打开，进入flutter_webview文件夹下并执行`flutter packages get`获取相关依赖包，然后执行`flutter run`运行项目，运行后需指定运行平台。
   嵌入代码请看flutter_webview/lib/main.dart文件，对应https链接需换成业务上需展示的地址
   ```dart
    final controller = WebViewController()
    ..setJavaScriptMode(JavaScriptMode.unrestricted)
    ..setBackgroundColor(const Color(0x00000000))
    ..setNavigationDelegate(
        NavigationDelegate(
        onProgress: (int progress) {},
        onPageStarted: (String url) {},
        onPageFinished: (String url) {},
        onWebResourceError: (WebResourceError error) {},
        onNavigationRequest: (NavigationRequest request) {
            return NavigationDecision.navigate;
        },
        ),
    )
    ..loadRequest(Uri.parse('https://xxx'));
   ```
3. **expo_webview**
   该文件夹为React Native Expo框架项目。
   推荐使用vs code编辑器打开，进入expo_webview文件夹下执行`npm install`或`yarn`，安装依赖包，然后执行`yarn start`运行项目。
   嵌入代码请看expo_webview/App.tsx文件, 对应https链接需换成业务上需展示的地址
   ```jsx
       <View style={styles.container}>
           <WebView
               source={{ uri: "https://xxx" }}
               style={styles.webview}
           />
           <StatusBar style="auto" />
       </View>
   ```
4. **chat_sdk_demo**
