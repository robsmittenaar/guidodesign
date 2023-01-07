<template>
	<main class="page">
		<pre>{{ page }}</pre>
	</main>
</template>

<script>
import components from '~/mixins/components';
import transition from '~/mixins/transition';
import seo from '~/mixins/seo';

import { getPageBySlug } from '~/utils/functions/wp';

export default {
	name: 'DefaultPage',

	mixins: [components, transition, seo],

	async asyncData({ params }) {
		const page = await getPageBySlug(params.slug);

		return { page };
	},

	data() {
		return {
			page: {},
		};
	},
}
</script>