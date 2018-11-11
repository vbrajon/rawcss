# Raw CSS - [rawcss.com](https://rawcss.com)
> CSS Starter kit. Import, customise variables, build flexbox layouts.

# Principles
## TLDR

- Quick usage: `<link rel="stylesheet" href="https://rawcss.com/raw.css">`
- Quick download: <a href="https://rawcss.com/raw.css" download>here</a> / [view source](https://rawcss.com/raw.css) / [IE](https://runkit.io/vbrajon/autoprefixer-api/1.0.0/https://rawcss.com/raw.css)

## Concepts

RawCSS is a CSS Starter Kit with 3 core concepts:

1. Flexbox shortcuts:
  - type: `.row`, `.column`, `.rows`, `.columns`
  - spacing: `.center`, `.around`, `.between`, `.evenly`
  - direction: `.top`, `.bottom`, `.left`, `.right`
2. CSS variables
  - matching CSS properties: `--border`, `--border-radius`, `--box-shadow`, `--transition`
  - additional: `--text`, `--primary`, `--spacing`
3. Styleguide & Reset

It is designed to encourage the use of **CSS only**, to stay **minimalist**, and to be **easy to learn**.

## Guidelines

RawCSS comes with some guidelines to ease layout creation, project management, code syntax.

- HTML: prefer use of `div`, `h1-6`, `a`, `button`, `label` & `input` over any other tags.
- HTML: avoid nested `div`, simplify markup, refactor.
- CSS: Breakpoints are at 600 / 900 / 1200 px to differentiate phone / tablet / laptop / desktop.
- CSS: Sort properties with [csscomb](https://github.com/vbrajon/rawcss/blob/master/.csscomb.json).
- CSS: Organise styles per components.
- PRODUCT: start to write a text styleguide. Extend RawCSS Foundations & add a Components section.

# Styleguide
## Brand
<h1 class="blockway">Raw<br>CSS</h1>

## Color
<div class="color">
  <div>
    <div style="background: #000;"><div>#000</div></div>
    <div style="background: #aaa;"><div>#aaa</div></div>
  </div>
  <div>
    <div style="background: #222;"><div>#222</div></div>
    <div style="background: #234;"><div>#234</div></div>
  </div>
  <div>
    <div style="background: #05f;"><div>#05f</div></div>
    <div style="background: #09f;"><div>#09f</div></div>
  </div>
  <div>
    <div style="background: #ccc;"><div>#ccc</div></div>
    <div style="background: #fff;"><div>#fff</div></div>
  </div>
</div>

## Typography
<div class="row">
  <div class="block">
    <div style="font-weight: 900;">900</div>
    <div style="font-weight: 800;">800</div>
    <div style="font-weight: 700;">700</div>
    <div style="font-weight: 600;">600</div>
    <div style="font-weight: 500;">500</div>
    <div style="font-weight: 400;">400</div>
    <div style="font-weight: 300;">300</div>
    <div style="font-weight: 200;">200</div>
    <div style="font-weight: 100;">100</div>
  </div>
  <div class="block">
    <h1 style="margin: 0;padding: 0;">H1</h1>
    <h2 style="margin: 0;padding: 0;">H2</h2>
    <h3 style="margin: 0;padding: 0;">H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>
  </div>
  <div class="column">
    <div class="block">
      <div>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
      <div>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
      <div>0 1 2 3 4 5 6 7 8 9</div>
    </div>
    <div class="block">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  </div>
</div>

<div class="row between">
<div>

## Token
|                   |                                  |
| ----------------- | -------------------------------- |
| `<a>`             | <a>Preview</a>                   |
| `<b>` `<strong>`  | <b>Preview</b>                   |
| `<i>` `<em>`      | <i>Preview</i>                   |
| `<u>` `<ins>`     | <u>Preview</u>                   |
| `<s>` `<del>`     | <s>Preview</s>                   |
| `<sup>` & `<sub>` | <sup>Pre</sup><sub>view</sub>    |
| `<kbd>`           | <kbd>Preview</kbd>               |
| `<code>`          | <code>Preview</code>             |
| `<blockquote>`    | <blockquote>Preview</blockquote> |

</div>
<div>

## Form
|              |                                           |
| ------------ | ----------------------------------------- |
| `<label>`    | <label>Preview</label>                    |
| `<input>`    | <input value="Preview" />                 |
| `<select>`   | <select><option>Preview</option></select> |
| `<textarea>` | <textarea>Preview</textarea>              |
| `<button>`   | <button>Preview</button>                  |

</div>
</div>
