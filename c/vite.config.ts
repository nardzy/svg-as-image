
import { defineConfig, type PluginOption } from "vite";
import { minify }from "html-minifier-terser";

const html = (): PluginOption => {
    return {
        name: "replaced",
        async transformIndexHtml(html) {
            const ref = "/index.js";
            const def = html.replace(ref, `.${ref}`);
            const min = await minify(def, {
                minifyJS: true,
                minifyCSS: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
            });
            return min;
        }
    }
};

const config = defineConfig({
    server: {
        fs: {
            allow: [".."],
        },
        port: 1420
    },
    plugins: [html()],
    build: {

        target: "es2020",

        modulePreload: false,

        outDir: "../",
        assetsDir: "./",
        copyPublicDir: true,

        minify: true,
        
        rolldownOptions: {
            output: {
                "entryFileNames": "[name].js",
                "assetFileNames": "[name].[ext]"
            }
        },

        
        terserOptions: {
            format: {
                ecma: 2020,
                semicolons: true,
                braces: false,
            },
            compress: {

                evaluate: true,
                hoist_funs: true,

                ecma: 2020,

                unsafe: true,
                unsafe_arrows: true,

                passes: 1,

            },
        }
    }
});

export default config;