/** @type {import('@sveltejs/kit').Config} */
import Adapter from '@sveltejs/adapter-static'
import json from '@rollup/plugin-json'

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: new Adapter()
    },
    plugins: [json({
        compact: true
    })]
};


export default config;
