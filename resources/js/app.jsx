import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
	resolve: (name) => {
		const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
		const page = pages[`./Pages/${name}.jsx`];

		if (!page) {
			throw new Error(`Page ${name} not found!`);
		}

		return page;
	},
	setup({ el, App, props }) {
		createRoot(el).render(<App {...props} />);
	},
}).catch((e) => console.error(e));
