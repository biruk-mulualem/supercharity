
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
    'index.csr.html': {size: 16793, hash: 'e14cc5fc933c2c2f4265e5d45dc998327d416bb357b373efa80924f8474aa031', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17056, hash: '0770b872052b6066d50c97d488f530ff0ee2ab9be33c50993fe74dca49864e4f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 44843, hash: '3b0484bb548a02e979fdbcafdb975eadebc9255debc0a26d4c0dd86ec387eb66', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 83093, hash: '58f47aeef70de9b7bee7c8821baf87f39f0d9b2845468e3d16e70b8569a5f5cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 48708, hash: 'd83fb1c2cb1785f3cf65cdf3b3579a8ffd668c8b5d777b96a71e46ab428916b7', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 38544, hash: '0d1a2ea2287be752221c5c3120bda11b4df2ffe7bade8a0820163c27709053e3', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 23086, hash: '71aa44cbcba45e68fa12a00af8e28e5aab4e4fffb7dc49a687a239d344c15c44', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 49530, hash: 'eb8189b32a5ab5f7af71e02b43e58e8de628729aacd67e3fb3354ce990b76477', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 29900, hash: '4ce37d8d15c2949700fbe565cfa0e831567b338738c6c98feed61242e4fac553', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 46960, hash: '3a080adccc9b4807c205b9c567401e0f0bbcf223ea0e516bf79f4dd1d65e2cf7', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 41922, hash: '9cfe3e8e555472781a22992b583469608e49ded30e17f4ba2bcddb056147924d', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
