
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
    'index.csr.html': {size: 16793, hash: 'acb7c2100bf93c0f39a71efa6db5c6bea1fd04c2fd676cf2c2b59a6cab59c03b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17056, hash: '23b1409c0164d5107ba27b51f775a12e81302fb79121923b2239a468e5eb82d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 46953, hash: '20319b49cba930da0c9d8a4c56fe8c40417545eb003be42f6e4a3ce939bb7bb8', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 97044, hash: 'c7f51408c1539896abd4118b70eae437035d08046b037571e7db4bc17776e3fb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 44836, hash: '9ee744798012c2991f691f87cedd646e6557c7eae5ab153b13a20d549634aa95', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 38537, hash: 'a9626700cf5655fe653745d859743aef9304f5259c557206c69434c060b73e6c', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 49515, hash: '921cd6c5a0c3ba6aa51845b06bc4cdb894bb81ea6d44ac5f0d338ab4ed534fd3', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 23085, hash: '61d243b2f3cc494c8c25d105c8a997a54c5923dcf10955128d966036f7431af4', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 31715, hash: '5b8201c39dc27428cd4e006292a047775417a00404475c058ddaf114dcb05649', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 48707, hash: '87fff2d470010db6dd4416bccfe6168272c03c6b8f7cdf253a9c8b16e87ee6b8', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 41915, hash: 'f157a6311e664c54f5fe8f154549e491e7bcaa40410277392e395c656a248a13', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
