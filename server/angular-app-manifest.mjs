
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2455, hash: 'd6581adce85a6ff6d48d232f31b4364c4e1e65720cd3922c257caa84ab3b0332', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'b52bdb792a4723c899a11a80d244599fb93535be18ab60086dbc990ae18469d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38425, hash: 'd59b3275a58146a855878226e429c5b5adfd631959aaee1143ad5e1defd1ed19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5C6LDBRP.css': {size: 36466, hash: 'cr9ORNLp24k', text: () => import('./assets-chunks/styles-5C6LDBRP_css.mjs').then(m => m.default)}
  },
};
