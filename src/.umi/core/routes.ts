// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/lihailin/git/umi-app/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/cart",
    "exact": true,
    "component": require('@/pages/cart/index.tsx').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.tsx').default
  },
  {
    "path": "/login",
    "exact": true,
    "component": require('@/pages/login/index.tsx').default
  },
  {
    "path": "/olist",
    "exact": true,
    "component": require('@/pages/olist/index.tsx').default
  },
  {
    "path": "/user",
    "exact": true,
    "component": require('@/pages/user/index.tsx').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
