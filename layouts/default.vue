<template>
  <div ref="app" class="app">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '~/components/appFooter/AppFooter';
import AppHeader from '~/components/appHeader/AppHeader';

export default {
  name: 'DefaultLayout',

  components: {
    AppFooter,
    AppHeader
  },
};
</script>
