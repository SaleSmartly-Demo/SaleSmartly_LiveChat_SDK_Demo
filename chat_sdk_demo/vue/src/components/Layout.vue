<script setup lang="ts">
import useDemo from '../hooks/useDemo';

const { options } = useDemo()
</script>

<template>
  <h1>SaleSmartly</h1>
  <div class="button_wrap">
    <button v-for="option in options" @click="option.handler">{{ option.title }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.button_wrap {
  button {
    margin-left: 8px;
  }
}
</style>
