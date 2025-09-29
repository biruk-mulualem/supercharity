
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
    'index.csr.html': {size: 16793, hash: '8334ece04a299553e0f66d32fab73b3224d1556c5c6c1140f203f2917923cacd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17056, hash: 'd5d41f7a00db88273b68f8e557651d7e0c952fbb1ee41ba8cb4bb6ae3dfd5d01', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 41922, hash: '8d42550facd0412c0e8686539c4b631e166b38fb576dcb8c599ff3cddb76ae79', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'index.html': {size: 82199, hash: '2e233bc9bf5de176fe7e9c0f4001d46e7678506e8f0898c26621f99b845f62fe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 23086, hash: 'd099566211ee5d9ff8891c079b997e6477630731fedb78f229c7738c79b3da8c', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 48708, hash: '8e8034b6945145b19f9dc084a383f818adde4b691a6075e9f6924e861442623f', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 46960, hash: 'a557ccdc747be4029ffb42853c674e4814b9a2c527b42a07637b0229349067f6', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 38544, hash: '7f7f364c27b62882059c9b0414e3bdb922fae30a1f6ad05ce8fb0b70ffbc9a1a', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 31718, hash: '14d623d48a444c31d8f85858f8f9ab3fb60e93a60a781240cd20aec191e9b635', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 49522, hash: 'f444e29d0e695b57935d9fe8a43b57f22017a553eb4d9283b608d91487151dab', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 44843, hash: '9605076d2d2e503254dbe05d18b5b21bf14384ba87eadf6269574da05d092f68', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
