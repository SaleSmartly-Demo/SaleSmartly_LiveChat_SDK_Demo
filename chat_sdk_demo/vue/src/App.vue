<script setup lang="ts">
import { onMounted } from 'vue';
import Layout from './components/Layout.vue'


onMounted(() => {
  // 监听消息发送事件
  window.ssq.push('onSendMessage', (obj: any) => {
    console.log('onSendMessage', obj);
  });

  // 打开聊天窗
  window.ssq.push('onOpenChat', () => {
    console.log('onOpenChat');
  });

  // 关闭聊天窗
  window.ssq.push('onCloseChat', () => {
    console.log('onCloseChat');
  });

   // 监听打开信息收集
   window.ssq.push('onOpenCollection', (obj: any) => {
      // obj.type = 'offline' 离线留资
      // obj.type = 'survey' 聊前留资
      console.log(obj)
  });

  // 监听完成信息收集
  window.ssq.push('onCollectionInfo', (obj: any) => {
      //obj包含了用户在信息收集过程中提供的数据
      console.log(obj)
  });

  // 监听点击Line图标
  window.ssq.push('onOpenLine', (obj: any) => {
      // 在这里执行点击Line图标后的操作
      console.log('Line icon clicked', obj);
  });

  // 监听点击Messenger图标
  window.ssq.push('onOpenMessenger', (obj: any) => {
      // 在这里执行点击Messenger图标后的操作
      console.log('Messenger icon clicked', obj);
  });

  // 监听点击Email图标
  window.ssq.push('onOpenEmail', (obj: any) => {
      // 在这里执行点击Email图标后的操作
      console.log('Email icon clicked', obj);
  });

  // 监听点击Telegram图标
  window.ssq.push('onOpenTelegram', (obj: any) => {
      // 在这里执行点击Telegram图标后的操作
      console.log('Telegram icon clicked', obj);
  });

  // 监听点击Whatsapp图标
  window.ssq.push('onOpenWhatsapp', (obj: any) => {
      // 在这里执行点击Whatsapp图标后的操作
      console.log('Whatsapp icon clicked', obj);
  });

  // 监听点击微信图标
  window.ssq.push('onOpenWeixin', (obj: any) => {
      // 在这里执行点击微信图标后的操作
      console.log('Weixin icon clicked', obj);
  });

  // 监听未读信息
  window.ssq.push('onUnRead', function (obj: any) {
      console.log(obj.num); // 未读数量
      console.log(obj.list); // 未读内容
  });
})
</script>

<template>
  <div>
    <Layout />
  </div>
</template>

<style scoped></style>
