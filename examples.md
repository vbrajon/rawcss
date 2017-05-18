# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

  You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

  To have a line break without a paragraph, you will need to use two trailing spaces.  
  Note that this line is separate, but within the same paragraph.  
  (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)


* Unordered list can use asterisks
- Or minuses
+ Or pluses

[I'm an inline-style link](https://www.google.com "")

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned |       |
| col 2 is      | centered      |       |
| zebra stripes | are neat      |       |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

<a href="http://www.youtube.com/watch?feature=player_embedded&amp;v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

---

## Utils

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Values</th>
      <th>Effect</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><code>tt</code></td>
      <td>text</td>
      <td>Tooltip: <span tt="Tooltip Top">Span</span> or <a tt href="http://www.rawcss.com/" target="_blank">Link</a></td>
    </tr>

    <tr>
      <td><code>tag</code></td>
      <td>null</td>
      <td>Tag: <div tag>Div</div> or <span tag>Span</span></td>
    </tr>

    <tr>
      <td><code>full</code></td>
      <td>null</td>
      <td>Width 100%</td>
    </tr>

    <tr>
      <td><code>hide</code></td>
      <td>null</td>
      <td>Display none</td>
    </tr>

    <tr>
      <td><code>serif</code></td>
      <td>null</td>
      <td>Font-family serif</td>
    </tr>

    <tr>
      <td><code>sans</code></td>
      <td>null</td>
      <td>Font-family sans-serif</td>
    </tr>

    <tr>
      <td><code>mono</code></td>
      <td>null</td>
      <td>Font-family monospace</td>
    </tr>

    <tr>
      <td><code>fs</code></td>
      <td><code>xs</code> <code>s</code> <code>m</code> <code>l</code> <code>xl</code></td>
      <td>Sets font sizes from 1.1rem to 2.4rem</td>
    </tr>

    <tr>
      <td><code>m</code></td>
      <td><code>0</code> <code>2</code></td>
      <td>Sets margin for all sides from 0 to 2rem</td>
    </tr>

    <tr>
      <td><code>mt</code></td>
      <td><code>0</code> <code>2</code> <code>4</code> <code>8</code></td>
      <td>Sets margin-top from 0 to 8rem</td>
    </tr>

    <tr>
      <td><code>mb</code></td>
      <td><code>0</code> <code>2</code> <code>4</code> <code>8</code></td>
      <td>Sets margin-bottom from 0 to 8rem</td>
    </tr>

    <tr>
      <td><code>p</code></td>
      <td><code>0</code> <code>2</code></td>
      <td>Sets padding for all sides from 0 to 2rem</td>
    </tr>

    <tr>
      <td><code>pt</code></td>
      <td><code>0</code> <code>2</code> <code>4</code> <code>8</code></td>
      <td>Sets padding-top from 0 to 8rem</td>
    </tr>

    <tr>
      <td><code>pb</code></td>
      <td><code>0</code> <code>2</code> <code>4</code> <code>8</code></td>
      <td>Sets padding-bottom from 0 to 8rem</td>
    </tr>

    <tr>
      <td><code>txt</code></td>
      <td><code>l</code> <code>c</code> <code>r</code> <code>j</code></td>
      <td>Set's text alignment to left, centre, right or justify</td>
    </tr>
  </tbody>
</table>

---

## Forms:

<form class="form">
  <fieldset class="form-group">
    <label for="username">USERNAME:</label>
    <input id="username" type="text" placeholder="type your name..." class="form-control">
  </fieldset>
  <fieldset class="form-group">
    <label for="email">EMAIL:</label>
    <input id="email" type="email" placeholder="" class="form-control">
  </fieldset>
  <fieldset class="form-group">
    <label for="country">COUNTRY:</label>
    <select id="country" class="form-control">
      <option>China</option>
      <option>U.S.</option>
      <option>U.K.</option>
      <option>Japan</option>
    </select>
  </fieldset>
  <fieldset class="form-group form-textarea">
    <label for="message">MESSAGE:</label>
    <textarea id="message" rows="5" class="form-control"></textarea>
  </fieldset>
  <div class="form-actions">
    <button type="button" class="btn btn-primary btn-block">Submit</button>
  </div>
</form>
<button primary>Primary button</button>
<button>Default button</button>
<button disabled>Disabled button</button>
