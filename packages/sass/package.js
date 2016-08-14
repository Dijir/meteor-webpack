Package.describe({
    name: 'webpack:sass',
    version: '1.1.4',
    summary: 'Integrate SASS (.scc and .sass) import with Webpack',
    git: 'https://github.com/thereactivestack/meteor-webpack.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('webpack:core-config@1.0.1');
  api.use('webpack:css@1.1.1');
  api.add_files(['webpack.config.js']);
});
