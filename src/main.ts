import './style.css';

import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import Lara from '@/presets/lara';

import App from './App.vue';

createApp(App)
	.use(PrimeVue, {
		unstyled: true,
		pt: Lara,
	})
	.mount('#app');
