import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
// 获取 package 的版本号
import pkgJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        envDir: './config/',
        plugins: [
            vue(),
            Components({
                dts: true,
                resolvers: [
                    VantResolver()
                ]
            }),
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src/') // 设置 `@` 指向 `src` 目录
            }
        },
        build: {
            // outDir: `./build/${mode}`
            outDir: `./build`
        },
        base: '/',
        define: {
            'import.meta.env.DEF_APP_VERSION': JSON.stringify(pkgJson.version)
        },
        server: {
            port: 9241,
            host: true,
            cors: true
        }
    }
});
