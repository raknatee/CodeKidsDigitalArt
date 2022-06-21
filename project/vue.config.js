process.env.VUE_APP_VERSION = require('./package.json').version
const path = require(`path`);
module.exports = {
    // outputDir: "/home/deploy",
    pwa: {
        workboxOptions: {
            skipWaiting: true
        },
        manifestOptions: {
            name: "CodeKids Procreate",
            short_name: "CKPro",
            start_url: "./",
            display: "standalone",
            theme_color: "#FFC6C7",



        },
    },
    configureWebpack: {
        devServer: {
            disableHostCheck: true,
            host: '0.0.0.0',
            public: "0.0.0.0",
            port: 80,
        },
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "~@/scss/global.scss";
                @import "~@/scss/color.scss";
                
                `
            }
        }
    }

}
