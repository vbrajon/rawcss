import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    Unocss({
      theme: {
        fontFamily: {
          sans: ['MarkPro'],
          mono: ['Hack'],
        },
      },
      presets: [
        presetUno(),
        presetIcons(),
        {
          name: 'preset-form',
        },
        {
          name: 'preset-prose',
          rules: [],
        },
        {
          name: 'preset-cut',
          theme: {
            fontFamily: {
              sans: ['Inter'],
              mono: ['Hack'],
            },
          },
          shortcuts: [
            [/^title-(\d)$/, ([, n = 1]) => [, 'text-3xl', 'text-2xl', 'text-xl'][n] || ''],
            [/^text-(\d)$/, ([, n = 1]) => [, 'text', 'text-sm', 'text-xs'][n] || ''],
            ['link', `cursor-pointer inline-flex font-medium underline decoration-2 decoration-indigo hover:text-indigo`],
            [
              'button',
              `cursor-pointer inline-flex font-medium px-4 py-2 border shadow-sm font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
            ],
            [
              /^button(-.*)?$/,
              ([, c = '-indigo']) =>
                `cursor-pointer inline-flex px-4 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg${c}-600 hover:bg${c}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring${c}-500`,
            ],
            [/^badge(-.*)?$/, ([, c = '-indigo']) => `inline-flex px-2 py-0.5 rounded font-medium bg${c}-100 text${c}-800`],
          ],
        },
        // {
        //   name: 'preset-line-clamp',
        //   rules: [
        //     [
        //       /^line-clamp-(\d+)$/,
        //       ([, d]) => ({
        //         overflow: 'hidden',
        //         display: '-webkit-box',
        //         '-webkit-box-orient': 'vertical',
        //         '-webkit-line-clamp': 1,
        //       }),
        //     ],
        //   ],
        // },
      ],
    }),
  ],
})
