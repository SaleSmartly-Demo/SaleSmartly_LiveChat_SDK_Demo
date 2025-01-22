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
})
</script>

<template>
  <div>
    <Layout />
  </div>
</template>

<style scoped></style>
