/** @type {import('@sveltejs/kit').Config} */
import Adapter from '@sveltejs/adapter-static'
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: new Adapter()
	}
};


export default config;
