
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
    'index.csr.html': {size: 34680, hash: '8d46c3e633c05f84188a5fdd14e921c36a9aeb3c9aea2bc5e17943748a3e4622', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 34040, hash: '134df511b1628d33c1b36ba7425971131acfab4fefc7569d9f1c729c26d68466', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 64104, hash: 'd64686ec659d3bac6aca7b5db1aea3e873d9cb981e25092ed76be7d1f23e6d19', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 58640, hash: 'b820b7853af8cd1acc12fd065c52656cfd6bc9e48e4a8db6b98c9c8ba4d39858', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 70798, hash: 'f08c82a7756e21305e3b8f17239b1366158fec21c5b9f5f5e8e94a92c822c5f5', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 41042, hash: '0a6e8bb16e6d62e6c19ad6bfdef358bed0fd8c05214414ba4dcda6d21a328256', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 55794, hash: '83935ed1475540321bb4bd968de5b01d803043399793584e5d5d67b75205ad7c', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 66776, hash: 'a91e621f9682b21ff640ef7d432060f28259dbeff73a6e61ce07fb57c01ce649', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 47646, hash: '0babc5bce1b4ee617863c7de9c754a85ff8694f17baafc4da0db3c86ac22e59e', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 62040, hash: 'd2a9fff9a5e5b27df607a5b9fb13f31fa81985f55322d1a3a837e7b2adbc7c89', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 63228, hash: '07472f7cfb9fbb13dfa319f9fbc4507ed43e7fbe241f6fa09d10b5c11b2033a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JJLPFCEA.css': {size: 28517, hash: 'XYsSVnkMktA', text: () => import('./assets-chunks/styles-JJLPFCEA_css.mjs').then(m => m.default)}
  },
};
