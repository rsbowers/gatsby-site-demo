const React = require('react');
const GlobalContext = require('./src/context/GlobalContext').default;
require('./src/styles/fonts.css');

exports.wrapRootElement = ({ element }) => {
  return <GlobalContext>{element}</GlobalContext>
}
