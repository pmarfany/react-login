const logo_128 = require('./assets/web-icons/logo-128.png');
const logo_144 = require('./assets/web-icons/logo-144.png');
const logo_152 = require('./assets/web-icons/logo-152.png');
const logo_192 = require('./assets/web-icons/logo-192.png');
const logo_512 = require('./assets/web-icons/logo-512.png');

const manifestData = {
  short_name: 'Kodi',
  name: 'Kodi',
  icons: [
    {
      src: logo_128,
      type: 'image/png',
      sizes: '128x128'
    }, {
      src: logo_144,
      type: 'image/png',
      sizes: '144x144'
    },
    {
      src: logo_152,
      type: 'image/png',
      sizes: '152x152'
    },
    {
      src: logo_192,
      type: 'image/png',
      sizes: '192x192'
    },
    {
      src: logo_512,
      type: 'image/png',
      sizes: '512x512'
    }
  ],
  start_url: '/',
  display: 'standalone',
  theme_color: '#154947',
  background_color: '#154947'
};

// Whatever string you output here will be emitted as manifest.json:
module.exports = JSON.stringify(manifestData, null, 2);
