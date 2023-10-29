import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import PkgConfig from 'vite-plugin-package-config';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const lifecycle = process.env.npm_lifecycle_event;

  return {
    // base: "/b/",
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue', 'vue-router'],

        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        dts: 'src/components.d.ts',
        deep: true,
        dirs: ['src/components'],
        extensions: ['vue', 'tsx'],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      PkgConfig(),
      OptimizationPersist(),
      lifecycle === 'report'
        ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
        : null,
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
          modifyVars: {
            // hack: `true; @import 'ant-design-vue/dist/antd.variable.less'`,
            // '@primary-color': '#eb2f96', // 全局主色
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3002,
      open: false,
      proxy: {
        '/api': {
          target: 'http://8.130.65.93:8001',
          changeOrigin: true, // 允许跨域
          // rewrite: path => path.replace('/api/', '/'),
        },
      },
    },
    optimizeDeps: {
      include: ['@ant-design/icons-vue', 'ant-design-vue'],
    },
    build: {
			assetsDir: "BI",
			reportCompressedSize: false,
			rollupOptions: {
				output: {
					// 在文件名中添加哈希以强制浏览器重新下载
					chunkFileNames: "assets/[name].[hash:8].js",
					assetFileNames: "assets/[name].[hash:8].[ext]",
				},
			},
			sourcemap: false,
			commonjsOptions: {
				ignoreTryCatch: false,
			},
			target: "es2015",
		},
  };
});
