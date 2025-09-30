
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
    'index.csr.html': {size: 16793, hash: 'e276af0e87469187c782969f8bc6ca393c423eb8a0039573c949492f0080828c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17056, hash: 'b7971997ffa380a4d0f62908a48664ec4b770b86ef80fcef118380dc56a10b38', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 41922, hash: 'f61f74f6e2c9b1af95af9b2f5dca1d9dd9d358e9395061dd8d9a9b468c5844da', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 46960, hash: '0b16a9e49433231d320a1eee67209dbf5162d499c3bc942c76ffb02b9b6e3afc', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 23085, hash: '2cf6311b417341800dfe3b8f90d09f06bca6f580edd286847b3d5d69178a10e8', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 48708, hash: '05547600fd548e7ddcef81db3f901daee59a2b21c5fe0ad83911f4108063381b', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 38544, hash: 'a878e36672e553ac45833e53083efdb014d5d1ca1fecaa2a775d0b2661d61aa6', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 31718, hash: '104a1e483a0d0ea1e85e858d662851f26ab42bc6fa9beac643a54eda49b14937', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 44843, hash: '4546f438dc51766166451906c6c28211ecfb6a1f2efd3b8e6d71ee9de49da5fc', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 83093, hash: '9b5c99a07c0a0fdcdd7d2fb218856edb799a9d9278217287713256efd16343f2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 49530, hash: '8eaa2a8460c97c9f79d727bfb8c328b389249bc5517cffd381d48d957dea25b3', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
