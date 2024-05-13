<template>
	<section
		class="flex max-w-3xl flex-col gap-8 rounded-xl bg-white p-10 dark:bg-secondary-semidark">
		<h1 class="text-center text-4xl font-bold text-black dark:text-primary-green">
			Tailwind CSS + PrimeVue
		</h1>

		<Panel
			header="Custom Design"
			:pt-options="{ mergeSections: false }"
			:pt="{
				header:
					'flex items-center justify-center p-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-tl-2xl rounded-tr-2xl text-white',
				title: 'leading-none font-bold uppercase text-2xl',
				content:
					'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-5 pb-8 pt-3 text-white text-center rounded-bl-2xl rounded-br-2xl text-xl',
			}">
			<p>
				Third panel ignores the default preset with
				<b>mergeSections: false</b>
				and applies a custom style to all elements of the panel instead.
			</p>
		</Panel>
	</section>
</template>

<script setup>
import Panel from 'primevue/panel';
</script>
