
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
    'index.csr.html': {size: 16793, hash: '2045c1605757ad916d5aa98cb10d388320f2bf42bfa9d33cfdd3714bfd55b38d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17056, hash: '1d6f54516361d1e85122e4f91a388ded62bf1ae165cd898c5690334b05a5bbcf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 41925, hash: 'a555cc63fa69c9c42cff6bd29a108f4064b91fadc3d000727e094b5d1e2fdb11', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'gallarypage/index.html': {size: 46916, hash: 'eb00ce033f2c9eb85b76d13972a7f3e31daaf6a213013bc55cba74cd93eca75c', text: () => import('./assets-chunks/gallarypage_index_html.mjs').then(m => m.default)},
    'audiopage/index.html': {size: 44846, hash: '84bbfece84b286002a1d9bbec6fd3f3520710ec4caa06923da29b9aaa15978c6', text: () => import('./assets-chunks/audiopage_index_html.mjs').then(m => m.default)},
    'articlepage/index.html': {size: 49185, hash: '55ad40f1fe5a4ab4653bf97544ddd6eb6778daebe91fafc0c80680df26eac606', text: () => import('./assets-chunks/articlepage_index_html.mjs').then(m => m.default)},
    'cpanel/index.html': {size: 22095, hash: '40359624ed057685fbec836418d91e7114b80d35722a85d6ce3d3ddf3e40061f', text: () => import('./assets-chunks/cpanel_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 38547, hash: '807e55080930ae351c29e66134eb8e77a31325daec7e9df0b9dd65def441c790', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'index.html': {size: 83249, hash: 'c859b17bbd901792e59ba9da30588cade62ebcd64572131564bc3eac384eb84a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'videopage/index.html': {size: 49525, hash: 'b571f33a4687a3fef86a360473a11d9d8d90b40b56bc434fda96d47197a59f78', text: () => import('./assets-chunks/videopage_index_html.mjs').then(m => m.default)},
    'admindashboard/index.html': {size: 31318, hash: '2c8c6811b69c11a8957f5dfff32626880b391e7ddf2bf123398e164ec227b5c4', text: () => import('./assets-chunks/admindashboard_index_html.mjs').then(m => m.default)},
    'styles-MHYYYQKM.css': {size: 125, hash: 'vNz8/tNWitU', text: () => import('./assets-chunks/styles-MHYYYQKM_css.mjs').then(m => m.default)}
  },
};
