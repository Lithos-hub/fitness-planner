import { render } from '@testing-library/vue';

import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
	it('renders props.msg when passed', () => {
		const msg = 'new message';
		const { getByText } = render(HelloWorld, {
			props: { msg },
		});
		expect(getByText(msg)).toBeTruthy();
	});
});