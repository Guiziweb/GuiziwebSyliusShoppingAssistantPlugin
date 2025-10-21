const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    // Shop entry
    .addEntry('shop', './assets/shop/entrypoint.js')

    // Admin entry
    .addEntry('admin', './assets/admin/entrypoint.js')

    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();