<template>
	<div class="flex h-screen">
		<SideMenu />
		<div class="flex flex-1 flex-col">
			<BaseNavbar />
			<div class="overflow-y-auto">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<script setup>
import BaseNavbar from '@/components/BaseNavbar.vue';

import SideMenu from './components/SideMenu.vue';
</script>
