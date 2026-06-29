# SaleSmartly_LiveChat_SDK_Demo

该项目主要存放一些使用插件的相关demo项目

1. **ios_webview**

   该文件夹为原生iOS项目。

   使用xcode运行项目，采用插入webview的形式加载web链接.

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

   ```
   <View style={styles.container}>
           <WebView
               source={{ uri: "https://xxx" }}
               style={styles.webview}
           />
           <StatusBar style="auto" />
       </View>
   ```
4. **uniapp_webview**
   该目录下存放uniapp框架项目。

   请使用HbuilderX打开项目，进入项目点击菜单栏`运行-运行到浏览器-Chrome`运行本项目。

   权限配置请查看uniapp_webview/manifest.json文件中app-plus相关配置。

   嵌入代码请查看uniapp_webview/pages/index/index.vue文件，对应https链接需换成业务上需展示的地址

   ```
   <template>
   <view class="content">
       <web-view class="web-view" :src="web_url"></web-view>
   </view>
   </template>

   <script setup>
       import {
           ref
       } from 'vue';
       const web_url = ref('https://xxx/');
   </script>
   ```
5. **chat_sdk_demo**
   该目录下存放聊天插件的使用demo

   目录结构：

   ├── chat_sdk_demo/     # 聊天插件使用demo

   │   ├── html/          # html页面示例

   │   ├── vue/           # vue示例

   - html：直接运行相对应的文件即可，该目录包含：

     - 关闭上传
     - 监听插件资源加载完成
     - 隐藏聊天窗内关闭按钮
     - 自定义聊天插件入口
     - ga上报
     - index.html（示例汇总）
   - vue：进入到vue文件夹下，执行`pnpm install`，安装依赖，然后执行`pnpm dev`运行项目，更换sdk链接请到`index.html`中找到对应的sdk将 `src`替换

     ```html
     <!-- 替换成您的sdk -->
        <script src="https://plugin-code.salesmartly.com/js/project_xxxxxxxxx.js"></script>
     ```
6. **chat_android**

   该目录下存放 SaleSmartly Chat Android 原生 SDK Demo APK 和详细接入文档。

   可直接下载 Demo APK 安装体验：

   [点击下载 Android Demo APK](chat_android/apk/salesmartly-chat-android-demo-v1.0.0.apk?raw=1)

   接入说明请查看 `chat_android/README.md`，包含 SDK 依赖、脚本地址注入、初始化、Compose/View 挂载、用户信息、常用命令、回调和权限说明。

7. **nativeapp_vue_webview**
   该文件夹为Native-Script-vue框架项目。

   推荐使用vs code编辑器打开，进入nativeapp_vue_webview文件夹下执行`npm install`或`yarn`，安装依赖包，然后执行`ns run ios 或 ns run andriod `运行项目。

   嵌入代码请看nativeapp_vue_webview/src/components/Home.vue文件, 对应https链接需换成业务上需展示的地址

   ```
   <Frame>
        <Page class="content" :actionBarHidden="true">
            <GridLayout>
                <WebView
                    ref="webviewRef"
                    class="web__page"
                    :src="webPageUrl"
                    @loadStarted="onLoadStarted"
                    @loadFinished="onLoadFinished"
                ></WebView>
            </GridLayout>
        </Page>
    </Frame>
   ```
