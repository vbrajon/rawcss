# RawCSS

A minimalist starter library.  
A styleguide described in code.  
<a href="https://rawcss.com/raw.css" download><svg viewBox="0 0 26 26"><path d="M 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z" fill="#05f"></path><path d="M 12 7 C 12 6.448 12.448 6 13 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 17 C 14 17.552 13.552 18 13 18 L 13 18 C 12.448 18 12 17.552 12 17 Z" fill="white"></path><path d="M 9 15 L 13 19 L 17 15" fill="transparent" stroke-width="2" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg>Download</a>

---

### Flexbox Shortcuts

|           |                                                   |
| --------- | ------------------------------------------------- |
| Direction | `.row` // `.column`                               |
| Position  | `.top` // `.bottom` // `.left` // `.right`        |
| Spacing   | `.center` // `.around` // `.between` // `.evenly` |

### CSS Variables

|                   |                                       |
| ----------------- | ------------------------------------- |
| `--text`          | #222                                  |
| `--primary`       | #05f                                  |
| `--inactive`      | #bbc                                  |
| `--stripe`        | rgb(0, 0, 0, 0.02)                    |
| `--background`    | #f5f5f5                               |
| `--border`        | 1px solid var(--inactive)             |
| `--border-radius` | 4px                                   |
| `--box-shadow`    | 0px 2px 4px var(--stripe)             |
| `--transition`    | all 0.3s cubic-bezier(0.4, 0, 0.2, 1) |
| `--spacing`       | 8px                                   |

### Tokens

|                   |                                           |
| ----------------- | ----------------------------------------- |
| `<a>`             | <a>Preview</a>                            |
| `<b>` `<strong>`  | <b>Preview</b>                            |
| `<i>` `<em>`      | <i>Preview</i>                            |
| `<u>` `<ins>`     | <u>Preview</u>                            |
| `<s>` `<del>`     | <s>Preview</s>                            |
| `<sup>` & `<sub>` | <sup>Pre</sup><sub>view</sub>             |
| `<kbd>`           | <kbd>⌘ + C</kbd> <kbd>⌘</kbd><kbd>C</kbd> |
| `<code>`          | <code>Preview</code>                      |
| `<blockquote>`    | <blockquote>Preview</blockquote>          |

### Form

|                           |                                           |
| ------------------------- | ----------------------------------------- |
| `<label>`                 | <label>Preview</label>                    |
| `<input>`                 | <input value="Preview" />                 |
| `<input type="radio">`    | <input type="radio" />                    |
| `<input type="checkbox">` | <input type="checkbox" />                 |
| `<input>`                 | <input value="Preview" />                 |
| `<select>`                | <select><option>Preview</option></select> |
| `<textarea>`              | <textarea>Preview</textarea>              |
| `<a class="button">`      | <a class="button">Preview</a>             |
| `<button class="ghost">`  | <button class="ghost">Preview</button>    |
| `<button class="icon">`   | <button class="icon"><svg viewBox="0 0 24 24"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg></button> |
