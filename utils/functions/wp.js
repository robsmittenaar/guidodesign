const WP_BASE_URL = 'https://guidodesign.exoape.com/wp-json';

export const getPageBySlug = async (slug) => {
  const data = await fetch(`${WP_BASE_URL}/wp/v2/pages?slug=${slug}&acf_format=standard`)
    .then((response) => response.json())
    .catch(err => console.log(err));

  return data?.[0] || {};
}

export const getPostBySlug = async (type, slug) => {
  const data = await fetch(`${WP_BASE_URL}/wp/v2/${type}?slug=${slug}`)
    .then((response) => response.json())
    .catch(err => console.log(err));

  return data?.[0] || {};
}

export const getPostsBySlugs = async (type, slugs) => {
  const data = await fetch(`${WP_BASE_URL}/wp/v2/${type}?slug=${slugs.join(',')}`)
    .then((response) => response.json())
    .catch(err => console.log(err));

  return data || [];
}

export const getPostsByType = async (type, count = 100) => {
  const data = await fetch(`${WP_BASE_URL}/wp/v2/${type}?per_page=${count}`)
    .then((response) => response.json())
    .catch(err => console.log(err));

  return data || [];
}

export const getMenu = async (name) => {
  const { items } = await fetch(`${WP_BASE_URL}/menus/v1/menus/${name}`)
    .then((response) => response.json())
    .catch(err => console.log(err));

  return (items || []).map(({ slug, url, target, title }) => ({
    slug, url, target, title
  })) || [];
};

export const getOptions = async () => {
  const { acf } = await fetch(`${WP_BASE_URL}/acf/v3/options/options`)
    .then((response) => response.json())
    .catch(err => console.log(err));

  return acf || {};
};
