Package.describe({
  name: 'streemo:reactive-date',
  version: '0.0.2',
  summary: 'Provides a minimal unix time reactive date with a configurable update period.',
  git: 'https://github.com/Streemo/reactive-date',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/client/reactive-date.js','client');
  api.export(['ReactiveDate'])
});