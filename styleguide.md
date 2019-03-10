# Foundations
## Brand = Logo / Icons / Assets
## Color
--text: #234
--inactive: #99a
--primary: #05f
#000 #99a
#222 #234
#05f #09f
#fff #f6f6f8

## Typography
font: Montserrat
weight: light (100) / regular (400) / bold (700)
size: 18px > 12 / 15 / 18 / 21 / 27 / 36
&mobile: 14px > 9 / 11.5 / 14 / 16.5 / 21 / 28
line-height: 1.5

## Token
<h1-6>
<a>

<b> <strong>
<i> <em>
<u> <ins>
<s> <del>
<sup> & <sub>

<kbd>
<code>
<blockquote>

## Form
<label>
<input> text / number / checkbox / radio / select / date / file / textarea / code
        ^> password / email / tel / range / search / color
<button>

## Box
border
border-radius
box-shadow
spacing: 8px > 0 / 4 / 8 / 16 / 24 / 32 / 40

## Animation


## Breakpoint
| size  | name    |
| ----- | ------- |
| <600  | mobile  |
| <900  | tablet  |
| <1200 | laptop  |
| then  | desktop |

# Components
None :)

---

## Guidelines

RawCSS comes with some guidelines to ease layout creation, project management, code syntax.

- HTML: prefer use of `div`, `h1-6`, `a`, `button`, `label` & `input` over any other tags.
- HTML: avoid nested `div`, simplify markup, refactor.
- CSS: Breakpoints are at 600 / 900 / 1200 px to differentiate phone / tablet / laptop / desktop.
- CSS: Sort properties with [csscomb](https://github.com/vbrajon/rawcss/blob/master/.csscomb.json).
- CSS: Organise styles per components.
- PRODUCT: start to write a text styleguide. Extend RawCSS Foundations & add a Components section.
