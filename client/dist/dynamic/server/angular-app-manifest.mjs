
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
    'index.csr.html': {size: 16793, hash: 'bb1cde29bad520521dec73000de52648b70e47fcf2d97f38cfadf647cca8a457', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17056, hash: '05e2a822fa700c1b14f05c4e59d11b1c2744eaea8956c672ad5d66fab91ab14c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83093, hash: '99eccded2483d8c0bde0790146e90c960891438a559cc91832220b481cd103c8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 48708, hash: '965c45e99e4bf911478322b1e7131a9b15eb6b4e86ea6deb2c26600884f52be6', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 44843, hash: '52c43ad196c07a1c128aff8abf1a4465cc4b9924a4710e111db96a9c3bc9ec03', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 23095, hash: '98a99c61c73d963562cc74db8034e1b5c5653594577457b89e58272fc51c87ed', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 41922, hash: 'e7f3660ef29f93d504a3647cd4e70b4de8f7551e86bf3af7e3d36f7cf77a86cd', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 38544, hash: 'aa74099392b8fd746663c2b25b7246fafc3955805de7e0273e65a482409c9fd3', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 31725, hash: '1f55170b3cc7355bf057410b9a6520b18e16ec33b31d0c7379a8690d00f1b7ce', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 49522, hash: 'e84c50cb007b0be33f81a494a0b25c54190d22acb73498115f28de7d5bd10289', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 46960, hash: '03c7922a9c44bafca31f9a88f90a165193e6963ce961b51d1a5a06da09a2d7c1', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
