# Style syntax

This file contains almost all commonly used CSS elements. They are grouped in meaningful sections.

The goal of this is to help people organize their CSS (or SCSS) code according to some simple rules. If done properly, other developers should have it easy finding their way around your code.

## Groups

### Basic

* `display`
* `opacity`
* `pointer-events`
* `cursor`
* `content`
* `overflow`
* `overflow-x`
* `overflow-y`
* `overflow-wrap`

### Positioning

* `position`
* `top`
* `right`
* `bottom`
* `left`
* `z-index`
* `float`
* `clear`
* `vertical-align`

### Box model

* `width`
* `min-width`
* `max-width`
* `height`
* `min-height`
* `max-height`
* `line-height`
* `margin`
* `padding`
* `border`
* `border-radius`
* `outline`
* `box-shadow`
* `box-sizing`

### Background

* `background`
  * `background-image`
  * `background-position`
  * `background-size`
  * `background-repeat`
  * `background-origin`
  * `background-clip`
  * `background-attachment`
  * `background-color`
* `background-blend-mode`

### Typography

* `color`
* `font`
  * `font-style`
  * `font-variant`
  * `font-weight`
  * `font-size`
  * `line-height`
  * `font-family`
* `letter-spacing`
* `line-height`
* `text-align`
* `text-decoration`
* `text-indent`
* `text-overflow`
* `text-shadow`
* `text-transform`
* `white-space`
* `word-break`
* `word-spacing`

### Transform

* `transform`
* `transform-origin`

### Transition

* `transition`
  * `transition-property`
  * **`transition-duration*`**
  * `transition-timing-function`
  * `transition-delay`

### Animation

* `animation`
  * **`animation-name*`**
  * **`animation-duration*`**
  * `animation-timing-function` 
  * `animation-delay`
  * `animation-iteration-count`
  * `animation-direction`
  * `animation-fill-mode`
  * `animation-play-state`

### Flexbox

#### Parent

* `align-content`
* `align-items`
* `justify-content`
* `flex-flow`
  * `flex-direction`
  * `flex-wrap`

#### Child

* `align-self`
* `order`
* `flex`
  * `flex-grow`
  * `flex-shrink`
  * `flex-basis`

### CSS Grid

This will be added after all browsers properly support it.

#### Other

* `border-collapse`
* `column-count`
* `column-gap`
* `column-width`
* `list-style`
  * `list-style-type`
  * `list-style-image`
  * `list-style-position`
* `mix-blend-mode`
* `resize`

## Example

Let's create a custom `input[type=file]`.

First, the HTML for it:

```
<label class="file" for="file">
    <span>File</span>
    <input id="file" type="file">
</label>
```

Let's start styling it. First of all, remove the default input
```
.file {
    /* Hiding default input */
    input[type="file"] { display: none; }
}
```
Our `<label>` has `display: inline` by default, and there is a regular cursor on it. Let's change that.
Both `display` and `cursor` are categorized under **Basic** properties.
```
.file {
    ...
    /* Basic */
    display: inline-block;
    cursor: pointer;
}
```
Next category is **Positioning**, but right now we have no need for it. Let's move on to **Box model**. Right now, the only properties from **Box model** I want to use are `border` and `padding`.
```
.file {
    ...
    /* Box model */
    border: 1px solid;
    padding: 20px 60px;
}
```
By default, `background` is transparent on `label`, so let's add a background.
```
.file {
    ...
    /* Background */
    background: #eeeeee;
}
```
Finally, let's edit the typography style.
```
.file {
    ...
  /* Typography */
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
```
The resulting code is well organized and easy to read. It gets even better on complex components.
```
.file {
 
  /* Hiding default input */
  input[type="file"] { display: none; }
 
  /* Basic */
  display: inline-block;
  cursor: pointer;
 
  /* Box model */
  border: 1px solid;
  padding: 20px 60px;
 
  /* Background */
  background: #eeeeee;
 
  /* Typography */
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: .2rem;
 
}
```