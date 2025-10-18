
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/contactus"
  },
  {
    "renderMode": 2,
    "route": "/articlepage"
  },
  {
    "renderMode": 2,
    "route": "/videopage"
  },
  {
    "renderMode": 2,
    "route": "/gallarypage"
  },
  {
    "renderMode": 2,
    "route": "/audiopage"
  },
  {
    "renderMode": 2,
    "route": "/donation"
  },
  {
    "renderMode": 2,
    "route": "/cpanel"
  },
  {
    "renderMode": 2,
    "route": "/admindashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 34680, hash: 'a4cfd9454d4fe23ec4ebe80426df8de32f9333dbb7e7ee8f2680ca911a4fdeec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 34040, hash: '4a627876ecf5138e076871849431b169d7847c07a3061eb745696b5a1a9dc823', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 58801, hash: '154a069241a9b03455fafcc8909c379fe7bf2e3bdb10f1ef979da9a3849604bd', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 55892, hash: '664290cc82891de7d2212f3e7efa3ddda93f37b94a897ca0177c0998f84e7d28', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 56548, hash: 'f04cd8f852317c94d3991ae84bb89e9bb92c674850a97fc570f3cb652361e642', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 58063, hash: '3d22348aa4cd7f98b674e098e4c797a40526d78a6480068c9e1ae70638a6ec16', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 40995, hash: '03d96ed6eff80276fe05564531d4db85cc4abcef459384980f355251393b4eb5', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 56628, hash: 'c4546547e2b37ed269e1f6602355e7d292632f3faef3daeca9d8e7e9817a1ce7', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 63363, hash: '1e5d4f93caada8bd944fa348d31638e1699135bd9c6eca3cbe345a5fb2a0c121', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 52944, hash: 'df0ac7fa302031f226521f3e7a75062b5a1eea0d90325f5e673c76d10550694d', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'donation/index.html': {size: 55807, hash: '8dc84e3b2e02dd3e98939949c38ae9c4fe61f9602600e66748970b854066b8c6', text: () => import('./assets-chunks/donation_index_html.mjs').then(m => m.default)},
    'styles-UNFGXSFI.css': {size: 32185, hash: 'BD9aQRpjaAo', text: () => import('./assets-chunks/styles-UNFGXSFI_css.mjs').then(m => m.default)}
  },
};
