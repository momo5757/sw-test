importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "favicon-152.png",
    "revision": "cae6d6e41e6c1c2ebada55eedcb5aa2d"
  },
  {
    "url": "favicon-196.png",
    "revision": "2a13dab4973fbbddbb2b43eae8b616b7"
  },
  {
    "url": "favicon-90opacity.svg",
    "revision": "6cad98736c8a46ee9b3ec64e2b10eff7"
  },
  {
    "url": "favicon.ico",
    "revision": "f83667cb9e74936050acbaf2e5fc9fbc"
  },
  {
    "url": "favicon.svg",
    "revision": "640e720e963d6ed689fd7fd90a586405"
  },
  {
    "url": "images/email-logo.svg",
    "revision": "98a09e284429a18be49884e85a8f62fa"
  },
  {
    "url": "images/external-link.svg",
    "revision": "0ce15b4968f1bd4fd36a95876b81cfa0"
  },
  {
    "url": "images/jumbotron.jpg",
    "revision": "3176c214d3e8fe178cdf1cd698986a42"
  },
  {
    "url": "images/other/01.jpg",
    "revision": "b8df953edec053e5e9d8b4d2fc352faf"
  },
  {
    "url": "images/other/02.jpg",
    "revision": "ad8816982d46d9852f38e50f2ced8c67"
  },
  {
    "url": "images/other/03.jpg",
    "revision": "61ab083fb84c1a22525ae3dfa097efbd"
  },
  {
    "url": "images/other/04.jpg",
    "revision": "c4e475a49da5893fdf3c882b9a5a2757"
  },
  {
    "url": "images/other/05.jpg",
    "revision": "cac037004f693db169a177776e831d51"
  },
  {
    "url": "images/other/06.jpg",
    "revision": "c2105d17728a9ef9b951b174ca8f5f8a"
  },
  {
    "url": "images/other/07.jpg",
    "revision": "90e6737101f7766ab64a19a31058d36f"
  },
  {
    "url": "images/other/08.jpg",
    "revision": "088c4d4ac8c7fb0722d6d8c3db4c7a15"
  },
  {
    "url": "images/other/09.jpg",
    "revision": "d281e0fa3305e92258033911c5632f7a"
  },
  {
    "url": "images/other/10.jpg",
    "revision": "32a93f45dd6c1368e85e3c080cbcf3ac"
  },
  {
    "url": "images/other/11.jpg",
    "revision": "2878a3b893bf5f1bda18cfa86c3efa7c"
  },
  {
    "url": "images/other/12.jpg",
    "revision": "7c94d43c38614cdda8197b679b9bc592"
  },
  {
    "url": "images/other/13.jpg",
    "revision": "999c618b4b71cb1257dd4009b00fccc4"
  },
  {
    "url": "images/other/14.jpg",
    "revision": "f1b655a3ae2c71120da2e7dcd1939263"
  },
  {
    "url": "images/other/15.jpg",
    "revision": "cef07bb223d4b2af4005ae21d81fa61f"
  },
  {
    "url": "images/other/16.jpg",
    "revision": "0b9b56cff550b0a24d2e7a8f592b6307"
  },
  {
    "url": "images/other/17.jpg",
    "revision": "826eda690cbc2a694933b29e6dd7ead0"
  },
  {
    "url": "images/other/18.jpg",
    "revision": "76b154c76b10741745a38b5a50a66314"
  },
  {
    "url": "images/other/19.jpg",
    "revision": "f6dad66722eb407e85fcbdc339a27abc"
  },
  {
    "url": "images/other/20.jpg",
    "revision": "1db90aff505e8787c1f8dc9c130e5864"
  },
  {
    "url": "images/other/21.jpg",
    "revision": "61ec9620bfd0f7887810469ea5019288"
  },
  {
    "url": "images/other/22.jpg",
    "revision": "4fd4d8ddd31c0b055fa84b9780a3ceb8"
  },
  {
    "url": "images/other/23.jpg",
    "revision": "834dad21164266790c6e8fe3b6aab8a9"
  },
  {
    "url": "images/other/24.jpg",
    "revision": "6831c09e3b83ced1965cede87adf2383"
  },
  {
    "url": "smooth-scroll/dist/js/smooth-scroll.polyfills.min.js",
    "revision": "dadb7b9d2bdcad038d63a2e853344806"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
