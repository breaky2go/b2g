Package.describe({
  name: 'nenti:b2g-terminal',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Implements the order overview for terminal in store.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.use('iron:router@1.0.12');
  api.use("reactioncommerce:core@0.11.0", ["client", "server"]);
  
  api.addFiles('lib/routes.js');

  api.addFiles([
    'server/orders.js'
  ], ['server']);

  api.addFiles([
    'client/orders.html',
    'client/orders.js'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  //api.use('nenti:b2g-terminal');
  api.addFiles('b2g-terminal-tests.js');
});
