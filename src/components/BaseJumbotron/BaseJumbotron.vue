<template>
	<div class="relative">
		<div class="absolute left-0 top-0 size-full bg-gradient-to-b from-transparent to-grayscale-3" />
		<img src="/img/header-1.jpg" alt="Header fitness image" class="h-[50vh] w-full object-cover" />
		<div class="absolute left-20 top-32 flex flex-col gap-5">
			<h1>{{ title }}</h1>
			<h2>{{ subtitle }}</h2>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BaseJumbotronProps } from './BaseJumbotron.interfaces';

defineProps<BaseJumbotronProps>();
</script>

<style scoped></style>
