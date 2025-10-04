
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
    'index.csr.html': {size: 34654, hash: 'aea17029ecee3489b064faec447c9210f287ba53ac34a296f80469f48ac72401', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 34014, hash: 'e77181f335499bf13b3ae67e7f64023a9beb413e6be93f53b7824477fe93108d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 62014, hash: '7597fd39a2c0b747cfa47335f6c9d2db3fd2d995a82573c6a7cabc953072583b', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 66347, hash: 'a81896d687eeed8e589a197daaba7ccc6e3392a35e2194730c7965f22c9b01f0', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 64078, hash: 'a3ead188fc1184a9cb5a17a93123d4ddecc62253639da44b097f26d2eba18b4b', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 41018, hash: '33758dc9875765b7ae5f1c2d1dac764c524b9b9d9c7866dd37514c9a90988abe', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 59391, hash: 'b9debfc017fba1e66c938bc5765ea0843821756da643069abf4369df21dc74f2', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'index.html': {size: 63202, hash: 'bb87c4f1f54bbfa836cc34a9642ffdccb82be3a4c70620338e5b5bf3503e343c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 55768, hash: 'a93bf910ee59a6df6d21c8a976c290dac1595200e1b67979e32bf9f92bcd47ae', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 47629, hash: '54dc62308832d2a7e492a8e7af204d074347c6813c899f0ee66db78c1dea5a41', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 66744, hash: '9620dd24658bc47fb7cc5d7032ac89db9c17bc3920ab9cca6c3aab8a4b363cb0', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'styles-2NTHSWX7.css': {size: 24554, hash: 's0BqAVporVQ', text: () => import('./assets-chunks/styles-2NTHSWX7_css.mjs').then(m => m.default)}
  },
};
