---
layout: null
title: wzhn.me
---
importScripts('workbox/workbox-sw.prod.v2.1.2.js');
const workboxSW = new WorkboxSW();
workboxSW.precache([{% for file in site.static_files %}{% if file.extname == ".jpg" or file.extname == ".png" or file.extname == ".svg" or file.extname == ".ico" %}
  {
    "url": "{{file.path | slice: 1, 999}}",
    "revision": "{{file.path | slice: 1, 999 | md5}}"
  },{% endif %}{% endfor %}
  {
    "url": "index.html",
    "revision": "{{'index.html' | md5}}"
  },
  {
    "url": "workbox/workbox-sw.prod.v2.1.2.js",
    "revision": "{{'workbox/workbox-sw.prod.v2.1.2.js' | md5}}"
  },
  {
    "url": "smooth-scroll/dist/js/smooth-scroll.polyfills.min.js",
    "revision": "{{'smooth-scroll/dist/js/smooth-scroll.polyfills.min.js' | md5}}"
  }
]);