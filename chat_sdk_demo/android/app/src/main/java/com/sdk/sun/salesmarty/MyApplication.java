package com.sdk.sun.salesmarty;

import android.app.Application;

import com.sdk.sun.salesmartyplugin.index.SaleSmartyInit;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        //初始化sdk
        SaleSmartyInit.init(this,"https://assets.salesmartly.com/js/project_590_13026_1678086223.js");
    }
}
