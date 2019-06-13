import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';


const Router = DefaultRouter;

const routes = [
  {
    "path": "/en/help",
    "exact": true,
    "component": require('../en/help.js').default
  },
  {
    "path": "/en",
    "exact": true,
    "component": require('../en/index.js').default
  },
  {
    "path": "/en/users",
    "exact": true,
    "component": require('../en/users.js').default
  },
  {
    "path": "/en/wip",
    "exact": true,
    "component": require('../en/wip.js').default
  },
  {
    "component": () => React.createElement(require('/Users/out_xu/.nvm/versions/node/v10.15.2/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
