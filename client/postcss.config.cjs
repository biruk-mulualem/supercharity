const tailwindPostcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

// Export PostCSS plugin instances. Some environments prefer an array of
// plugin functions rather than a named-object.
module.exports = {
  plugins: [
    tailwindPostcss(),
    autoprefixer(),
  ],
};
