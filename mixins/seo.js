import { decodeHtmlEntity } from '~/utils/functions/html';

export default {
  head() {
    const url = 'https://www.guidodesign.nl' + this.$route.path;

    const title = decodeHtmlEntity(this.page?.acf?.seoTitle ?? '');
    const description = this.page?.acf?.seoDescription ?? '';
    const keywords = this.page?.acf?.seoKeywords ?? '';

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: keywords },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: "twitter:title", name: "twitter:title", content: title },
        { hid: "twitter:url", name: "twitter:url", content: url },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
      ],
      link: [
        { rel: 'canonical', href: url }
      ]
    }
  }
};
