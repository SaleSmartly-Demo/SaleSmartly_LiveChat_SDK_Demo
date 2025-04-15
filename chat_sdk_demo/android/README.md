# SaleSmarty Android插件使用文档

## App Manifest需要的权限
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>


## 1、初始化SDK
        SaleSmartyInit.init(Context context,String string);
## 1、初始化SaleSmarty网页
        SaleSmartyInit.initSaleSmartyView(Activity activity);
> 注意:在Activity初始化浏览器越早越好

## 2、添加浏览器到父布局
        SaleSmartyInit.addSaleSmartyView(ViewGroup viewGroup);
> 注意:添加的父布局所在的Activity必须跟执行初始化salesmarty网页的Activity一致
        
## 3、上传用户信息
        SaleSmartyInit.uploadUserMessage(String user_id,
                                         String user_name,
                                         String language,
                                         String phone,
                                         String email,
                                         String description);
> 注意:上传用户信息暂时不支持回调

## 4、关闭窗口
        SaleSmartyInit.openSaleSmartyView(b var0);
## 5、打开窗口
        SaleSmartyInit.closeSaleSmartyView(a var0);
## 6、获得未读信息数
        SaleSmartyInit.setUnReadMessagesListener(c var0);
> 注意: 参数c接口会返回一个int值，就是未读的数量

## 7、文件选择回调
        SaleSmartyInit.upLoadFiles(int requestCode,Intent var0);
> 注意: SaleSmartyInit要在执行初始化salesmarty网页的Activity的onActivityResult调用