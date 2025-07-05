
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cv-joseg/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cv-joseg"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2464, hash: '0418529de70a36b1737abc1a9ec6d7bae3cd08ae8d478f3cb2c7eb4644811ac7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1066, hash: '2b79176031a41b437617646c00af4d1ce82025f710be0198d08dd0a4adee8d3c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38434, hash: 'd6fbcb13dead07693cdd90ceeaeb2430de7f3f04814c27820f8e274571782c60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5C6LDBRP.css': {size: 36466, hash: 'cr9ORNLp24k', text: () => import('./assets-chunks/styles-5C6LDBRP_css.mjs').then(m => m.default)}
  },
};
