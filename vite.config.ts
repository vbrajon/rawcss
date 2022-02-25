import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno, presetIcons, presetTypography } from 'unocss'

import fs from 'fs'
const inter = fs.readFileSync('./tailwind-inter.css', 'utf8')
const form = fs.readFileSync('./tailwind-form.css', 'utf8')
const cut = fs.readFileSync('./cut.css', 'utf8')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    Unocss({
      presets: [
        presetUno(), //* .m-4 .p-4 .w-full .rounded-lg
        presetIcons(), //* .i-feather-activity
        presetTypography(), //* .prose dark:prose-invert prose-img:rounded-xl
        {
          name: 'preset-cut',
          theme: {
            // fontFamily: {
            //   sans: ['MarkPro'],
            //   mono: ['Hack'],
            // },
            fontSize: {
              '2xs': ['0.625rem', '1rem'],
            },
          },
          shortcuts: [
            [
              /^title-(\d)$/,
              ([, n = 1]) => [, 'text-2xl sm:text-3xl font-extrabold', 'text-2xl sm:text-xl font-bold', 'text-lg font-semibold', 'font-semibold'][n] || '',
            ],
            [/^text-(\d)$/, ([, n = 1]) => [, 'text-base', 'text-sm', 'text-xs', 'text-2xs'][n] || ''],
            ['link', `cursor-pointer inline-flex font-medium underline decoration-2 decoration-indigo hover:text-indigo`],
            ['button', `cursor-pointer inline-flex font-medium py-1 px-2 border border-2 border-indigo rounded bg-white hover:text-indigo`],
            [
              /^button(-.*)?$/,
              ([, c = '-indigo']) => `cursor-pointer inline-flex font-medium py-1 px-2 border border-2 border${c} rounded bg-white hover:text${c}`,
            ],
            [/^badge(-.*)?$/, ([, c = '-indigo']) => `inline-flex px-2 py-0.5 rounded font-medium bg${c}-100 text${c}-800`],
          ],
          layers: {
            reset: -100,
          },
          rules: [
            [/^reset$/, () => `@import '@unocss/reset/tailwind.css';*,::before,::after{border-color:#e5e7eb;}`, { layer: 'reset' }],
            [/^inter$/, () => inter, { layer: 'reset' }],
            [/^form$/, () => form, { layer: 'reset' }],
            [/^cut$/, () => cut, { layer: 'reset' }],
          ],
        },
        {
          name: 'preset-debug',
          shortcuts: [
            ['shortcutcut', `link button badge`], //* shortcuts can be nested
          ],
        },
      ],
    }),
  ],
})
