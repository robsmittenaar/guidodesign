<template>
	<main class="page">
		<component :is="component.acf_fc_layout" v-for="component in components" :key="component.acf_fc_layout" v-bind="component" />
	</main>
</template>

<script>
import components from '~/mixins/components';
import transition from '~/mixins/transition';
import seo from '~/mixins/seo';

import { getPageBySlug } from '~/utils/functions/wp';

export default {
	name: 'HomePage',

	mixins: [components, transition, seo],

	async asyncData() {
		const page = await getPageBySlug('home');

		return { page };
	},

	data() {
		return {
			page: {},
		};
	},
}
</script>