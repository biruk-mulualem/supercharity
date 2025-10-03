
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
    'index.csr.html': {size: 33204, hash: '58812b856c1a4d5a52d35f3acf98ec4db75aa65757117a26f03500f9a5bf6908', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 34014, hash: 'ef8329f1f7f9f2df6b09f467533003a00343b3e13096206a9d077566f6bd2641', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 64789, hash: '92b7c35ae6d02244aa9dd4742c66c1d339ccb9882a9249e107b990ea9071cecd', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 59798, hash: 'ac9afb524e44dba04d94b20d8cb5db29dd045dcfb5ab7daef46949c93bb821b9', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 67067, hash: '9115c5a7eeeae5c1b8da69a9188bedfc387eb64fbd368186aecfdf33980a8c80', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 38979, hash: '621f61b8797eb607d5f74f3fed00f03ae6767f08bd3b9e1934abb6d8f7b4f1da', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 56420, hash: 'e45f05595ab78f2325eff3629a53e35733fe3f3957423d42afa60d4cc9071ad0', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 67404, hash: '08b1d7b25ab0c46dd10babd23330b93299c26f9f417b785f5deaa9ebd07a5d75', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 48120, hash: 'b004793fb408a967fc33f8fdeecb3a98a5b2cb370283941302d097537f03ef23', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 94220, hash: '548e8684a43f6611575365198f16b2c1f5ebc3408c4fad55f2a12d7b9ad4d211', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 62719, hash: '88674ec11b75e3fad9299b4e78a76e2b9fd26fb5462dcc98bbf7a6c2bf420219', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
