export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	generate: {
		interval: 2000
	},

	// Loading: https://nuxtjs.org/docs/features/loading
	loading: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'guidodesign.nl',
		titleTemplate: '%s',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'author', content: 'Guidodesign' },
			{ name: 'robots', content: 'index, follow' },
			{ property: 'og:site_name', content: 'Guidodesign' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:image', hid: 'og_image', content: 'https://www.guidodesign.nl/img/og.png' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:creator', content: '@guidodesign' },
			{ name: 'twitter:image:src', hid: 'twitter_image', content: 'https://www.guidodesign.nl/img/og.png' },
			{ name: 'msapplication-TileColor', content: '#0c5582' },
			{ name: 'theme-color', content: '#ffffff' },
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
			{ rel: 'manifest', href: '/favicon/site.webmanifest', crossorigin: 'use-credentials' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/scss/index.scss'],

	// Exposed styles: https://github.com/nuxt-community/style-resources-module#readme
	styleResources: {
		scss: ['~/assets/scss/functions.scss', '~/assets/scss/mixins.scss', '~/assets/scss/vars.scss', '~/assets/scss/type.scss'],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/style-resources', '@nuxt/image'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/svg', '@nuxtjs/device'],

	// Nuxt Router: custom classes
	router: {
		linkActiveClass: 'is-active',
		linkExactActiveClass: 'is-current',
	},

	// Server Configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-server
	server: {
		host: '0.0.0.0',
	},

	image: {
		domains: ['https://wp.guidodesign.nl'],
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			'2xl': 1536
		},
	}
};
