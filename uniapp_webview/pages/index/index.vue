<template>
	<view class="content">
		<web-view class="web-view" :src="web_url"></web-view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const web_url = ref('https://faovoj.slinkchat.top/');
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.web-view {}
	}
</style>