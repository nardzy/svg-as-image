
import { defineConfig, type PluginOption } from "vite";

const hash = (len: number) => {
    let i = 0;
    let str = "";
    while (i < len) {
        str += (Math.random() * 36 >>> 0).toString(36);
        i += 1;
    }
    return str;
};

const config = defineConfig({
    server: {
        fs: {
            allow: [".."],
        },
        port: 1420
    },
    build: {

        target: "es2020",

        modulePreload: false,

        outDir: "../static",
        assetsDir: "./",
        copyPublicDir: true,

        minify: true,
        rolldownOptions: {
            
        }
    }
});

export default config;