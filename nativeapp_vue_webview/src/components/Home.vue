<script lang="ts" setup>
import {
    ref,
    computed,
    onMounted,
    onUnmounted,
    $navigateTo,
} from "nativescript-vue";
// import Details from "./Details.vue";
import {
    WebView,
    Application,
    AndroidApplication,
    // requestPermissions,
} from "@nativescript/core";

// 需要加载的链接地址（https://xxx）
const webPageUrl = ref("");

const webviewRef = ref<any>(null);
let fileCallback: any = null;
const FILE_CHOOSER_CODE = 5173;

const onLoadStarted = (args: any) => {
    console.log("WebView 开始加载:", args.url);
};
const onLoadFinished = (args: any) => {
    console.log("WebView 加载完成:", args.url);
};

const setAndroidConfig = async () => {
    const webView = webviewRef.value?.nativeView;
    if (!webView?.android) return;

    const settings = webView.android.getSettings();

    // ===== WebView 基础配置 =====
    settings.setJavaScriptEnabled(true);
    settings.setDomStorageEnabled(true);
    // ===== UA 注入 =====
    const defaultUA = settings.getUserAgentString();
    settings.setUserAgentString(defaultUA);

    // ===== WebChromeClient（文件 / 拍照 / 视频）=====
    const activity =
        Application.android.foregroundActivity ||
        Application.android.startActivity;

    const FileChooserWebChromeClient = android.webkit.WebChromeClient.extend({
        onShowFileChooser: function (
            webView: any,
            filePathCallback: any,
            fileChooserParams: any
        ) {
            // 保存 callback
            (webView as any)._filePathCallback = filePathCallback;

            const intent = fileChooserParams.createIntent();
            activity.startActivityForResult(intent, 5173);
            return true;
        },
    });

    webView.android.setWebChromeClient(new FileChooserWebChromeClient());

    // ===== 文件选择回调 =====
    Application.android.on(AndroidApplication.activityResultEvent, (args) => {
        if (args.requestCode !== FILE_CHOOSER_CODE || !fileCallback) return;

        if (args.resultCode === android.app.Activity.RESULT_OK) {
            fileCallback.onReceiveValue(
                android.webkit.WebChromeClient.FileChooserParams.parseResult(
                    args.resultCode,
                    args.intent
                )
            );
        } else {
            fileCallback.onReceiveValue(null);
        }
        fileCallback = null;
    });
};

onMounted(() => {
    console.log("mounted");
    setTimeout(() => {
        setAndroidConfig();
        webPageUrl.value = "https://faovoj.slinkchat.top/";
    }, 100);
});

onUnmounted(() => {
    console.log("unmounted");
});
</script>

<template>
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
</template>

<style scoped>
.content {
    width: 100%;
    height: 100%;
}
.web__page {
    width: 100%;
    height: 100%;
}
</style>
