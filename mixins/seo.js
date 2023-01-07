import { decodeHtmlEntity } from '~/utils/functions/html';

export default {
  head() {
    let type;
    let description;

    const url = 'https://www.guidodesign.com' + this.$route.path;

    if (this.page) {
      type = this.page?.title?.rendered ?? '';
      description = this.page?.acf?.seo_description ?? '';
    }

    if (this.post) {
      type = this.post?.title?.rendered ?? '';
      description = this.post?.acf?.seo_description ?? '';
    }

    const title = decodeHtmlEntity(type);

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title + ' — Guidodesign' },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: "twitter:title", name: "twitter:title", content: title + ' — Guidodesign' },
        { hid: "twitter:url", name: "twitter:url", content: url },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
      ],
      link: [
        { rel: 'canonical', href: url }
      ]
    }
  }
};
