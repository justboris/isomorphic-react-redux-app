/* eslint react/prefer-stateless-function: 0, react/no-danger: 0, react/forbid-prop-types: 0 */
/* eslint no-underscore-dangle: 0, global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import { webpackHost, webpackPort } from '../../config/env';
export default class Default extends React.Component {
  render() {
    const { assets, component, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';


return (
      <html lang="en">
        <head>
          <title>Boris Kan</title>
          <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700,900" rel="stylesheet" />
          <link rel="icon" type="image/png" href="https://photos.google.com/search/_tra_/photo/AF1QipP2cGF-L2DxNPvkYDMlLZqOIUWDWk0981Lud35t" />

          {/* production */}
          {Object.keys(assets.styles).map((style, key) =>
            <link
              href={assets.styles[style]}
              key={key} media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />
          )}
          {/* development */}
          {
            Object.keys(assets.styles).length === 0 ?
              <style dangerouslySetInnerHTML={{ __html: require('../containers/App.css')._style }} /> :
            null
          }
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />

        </body>
      </html>
    );
  }
}
Default.propTypes = {
  assets: React.PropTypes.object,
  component: React.PropTypes.node,
  store: React.PropTypes.object,
};