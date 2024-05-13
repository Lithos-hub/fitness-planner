import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';

createApp(App)
	.use(PrimeVue, {
		unstyled: true,
		pt: Lara,
	})
	.mount('#app');
