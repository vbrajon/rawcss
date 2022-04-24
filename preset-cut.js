const process = css => async (_, { generator }) => {
  const t = async str => (await Promise.all(str.split(' ').map(async v => await generator.parseToken(v)))).flat().filter(v => v && v[2]).map(v => v[2]).join('')
  const r = /@apply [^;]*;/g
  const replacements = await Promise.all((css.match(r) || []).map(v => t(v.slice(7, -1))))
  return css.trim().replace(r, () => replacements.shift())
}
const inter = process(`
/* @import url('https://rsms.me/inter/inter.css'); */
html, .font-inter, .font-sans { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }
@supports (font-variation-settings: normal) { html, .font-inter, .font-sans { font-family: 'Inter var', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; } }
html, .text-base { letter-spacing: -0.011em; }
.text-2xs { letter-spacing: 0.01em; }
.text-xs { letter-spacing: 0; }
.text-sm { letter-spacing: -0.006em; }
.text-lg { letter-spacing: -0.014em; }
.text-xl { letter-spacing: -0.017em; }
.text-2xl { letter-spacing: -0.019em; }
.text-3xl { letter-spacing: -0.011em; }
.text-4xl { letter-spacing: -0.021em; }
.text-5xl, .text-6xl, .text-7xl, .text-8xl, .text-9xl { letter-spacing: -0.022em; }
`)
const form = process(`
/*! Tailwind Form with em instead of rem */
[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
-webkit-appearance: none;
    appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0px;
padding-top: 0.5em;
padding-right: 0.75em;
padding-bottom: 0.5em;
padding-left: 0.75em;
font-size: 1em;
line-height: 1.5em;
--tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
outline: 2px solid transparent;
outline-offset: 2px;
--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: #2563eb;
--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
border-color: #2563eb;
}

input::placeholder,textarea::placeholder {
color: #6b7280;
opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
padding: 0;
}

::-webkit-date-and-time-value {
min-height: 1.5em;
}

select {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5em center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5em;
-webkit-print-color-adjust: exact;
    color-adjust: exact;
}

[multiple] {
background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75em;
-webkit-print-color-adjust: unset;
    color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
-webkit-appearance: none;
    appearance: none;
padding: 0;
-webkit-print-color-adjust: exact;
    color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
-webkit-user-select: none;
    user-select: none;
flex-shrink: 0;
height: 1em;
width: 1em;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
border-radius: 0px;
}

[type='radio'] {
border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
outline: 2px solid transparent;
outline-offset: 2px;
--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
--tw-ring-offset-width: 2px;
--tw-ring-offset-color: #fff;
--tw-ring-color: #2563eb;
--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;
}

[type='checkbox']:checked {
background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
border-color: transparent;
background-color: currentColor;
}

[type='checkbox']:indeterminate {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
border-color: transparent;
background-color: currentColor;
}

[type='file'] {
background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit;
}

[type='file']:focus {
outline: 1px auto -webkit-focus-ring-color;
}

/*! Tailwind Form extension */
[multiple] {
padding: 0;
}

select[multiple] option,
select[multiple] optgroup {
padding-top: 0.25em;
padding-right: 0.75em;
padding-bottom: 0.25em;
padding-left: 0.75em;
}

[multiple] optgroup option::before {
content: none;
}

.form button {
-webkit-appearance: none;
appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0px;
padding-top: 0.5em;
padding-right: 0.75em;
padding-bottom: 0.5em;
padding-left: 0.75em;
font-size: 1em;
line-height: 1.5em;
--tw-shadow: 0 0 #0000;
}

.form button:focus {
outline: 2px solid transparent;
outline-offset: 2px;
--tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: #2563eb;
--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
border-color: #2563eb;
}
`)
const cut = process(`
/*! Details */
details { @apply relative inline-flex; }
details > summary { @apply inline-flex cursor-pointer; }
details:not([class]) > summary::before { @apply i-heroicons-outline:chevron-right ml-[-0.25rem] mr-[0.25rem] h-[16px] w-[16px] content-[''] inline-flex self-center bg-gray-200 cursor-pointer; }
details:not([class])[open] > summary::before { @apply rotate-90; }
details:not([class]) > div { @apply border-l-1 ml-[3.5px] pl-[11.5px]; }
details.popup[open] > summary::before { @apply backdrop content-['']; }
details.dropdown[open] > summary::before { @apply overlay content-['']; }
.popup > :where(div) { @apply left-[50%] my-[10vh] max-h-[80vh] min-h-[25vh] min-w-[50vw] max-w-[90vw] fixed z-20 top-0 mx-auto p-6 bg-white -translate-x-1/2 shadow-xl; }
/*! Tooltip */
[title] { @apply relative overflow-visible; }
[title]:hover::after { @apply tooltip; }
`)
export default {
  name: "preset-cut",
  layers: { preset: -10, reset: -100 },
  theme: {
    fontSize: {
      '2xs': ['0.625rem', '1rem'],
    },
  },
  rules: [
    [/^reset-tailwind$/, () => `@import 'https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css';*,::before,::after{border-color:#e5e7eb;}`, { layer: 'reset' }],
    [/^set-inter$/, inter, { layer: "reset" }],
    [/^set-cut$/, cut, { layer: "preset" }],
    [/^form$/, form, { layer: "preset" }],
    [/^form:.*$/, async ([m], { generator }) => {
      const k = m.split(':').slice(1, -1).join(':')
      const v = m.split(':').slice(-1)[0]
      const t = async str => (await Promise.all(str.split(' ').map(async v => await generator.parseToken(v)))).flat().filter(v => v && v[2]).map(v => v[2]).join('')
      return `.form ${k.replace(/\+/g, ' ')} { ${await t(v.replace(/\+/g, ' '))} }`
    }, { layer: 'preset' }],
    [/^i-(.*)$/, ([_, name]) => {
      return {
        '--un-icon': `url(https://api.iconify.design/${name}.svg)`,
        'mask': 'var(--un-icon) no-repeat',
        'mask-size': '100% 100%',
        '-webkit-mask': 'var(--un-icon) no-repeat',
        '-webkit-mask-size': '100% 100%',
        'background-color': 'currentColor',
        'width': '1em',
        'height': '1em',
      }
    }, { layer: 'preset' }],
    [/^i-([rl])-(.*)$/, ([_, direction, name]) => {
      return {
        '--un-icon': `url(https://api.iconify.design/${name}.svg)`,
        'padding-right': '40px',
        'background-image': 'var(--un-icon)',
        'background-position': 'right 16px center',
        'background-repeat': 'no-repeat',
      }
    }, { layer: 'preset' }],
  ],
  shortcuts: [
    [/^(a|link)(-.*)?$/, ([,, c = '-indigo']) => `cursor-pointer inline-flex font-medium underline decoration-2 decoration${c} hover:text${c}`],
    [/^button(-.*)?$/, ([, c = '-indigo']) => `cursor-pointer inline-flex font-medium py-1 px-2 border border-2 border${c} rounded bg-white hover:text${c}`],
    [/^badge(-.*)?$/, ([, c = '-indigo']) => `inline-flex px-2 py-0.5 rounded font-medium bg${c}-100 text${c}-800`],
    [/^title-(\d)$/, ([, n = 1]) => [, 'text-2xl sm:text-3xl font-extrabold', 'text-2xl sm:text-xl font-bold', 'text-lg font-semibold', 'font-semibold'][n] || ''],
    [/^text-(\d)$/, ([, n = 1]) => [, 'text-base', 'text-sm', 'text-xs', 'text-2xs'][n] || ''],
    ['tooltip', `z-10 line-clamp-3 left-[50%] w-[350px] max-w-[max-content] bg-slate-800 content-[attr(title)] [transform:translate(-50%,calc(-100%-0.5rem))] absolute top-0 p-1 text-white text-xs font-medium leading-normal rounded pointer-events-none`],
    ['overlay', `z-10 fixed top-0 left-0 right-0 bottom-0 cursor-default`],
    ['backdrop', `overlay bg-gray-900/60 backdrop-blur-sm`],
  ],
}
