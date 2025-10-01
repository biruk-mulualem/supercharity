
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
    'index.csr.html': {size: 16793, hash: '41fae53b597ea135ebad2febfb8d63ffcc7e6483db21e54323f3342585d581d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17056, hash: '89040bc14e89247cab7dede2bf794d14307f026338c0951b071681715030333a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 46916, hash: '83b6fc316ab06eefe8bc8f5f227161877d7e283a26b64fda047d4620d4890840', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 41925, hash: '3c3a00184ea88afd04cecb23688512a488f6b4684789bdcd55bf59f2c937f2ef', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 44846, hash: 'b2b11b08fc92b004074893b0b1d09d6bb312fc70cf43931241d198300f27cf83', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 22095, hash: '58ba2ca42bcbf8ff38b128b55e384d11cfca04b53fdb19fa1bdcf50f6192a0dd', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 38547, hash: 'eef5c29e5534b03e38a51fa9519590f05c986d4ca2dc262b9043c8d162eebd72', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 49185, hash: 'c1d90675939210c73034dd312bd06d1270f6b5f03d676710743e5e74550fe51b', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 49525, hash: '73e2221c75b71639a809c580612d1b334e3a8f8c344566d89a4c28725a4308d5', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 32484, hash: '7b974120ce87c24e4652b6f38b19f4fda8c3161a941e91c6ba3052c1a5a3df31', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 83249, hash: 'b161e38efef438c06a600e70a014d658b7fd9ad21a5a033738503a21fee8555f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
