# Modular 2.0

This is my (@Siclol) CSS framework. I use it on **medium** and **large** scale projects. It consists of a bunch of **shorthand utility classes**.

## Example of what my classes look like

```html
<div class="d:f d:n@xs">…</div>
<div class="o:.5 o:1:hover">…</div>
```

## Why did I do it?

Because it results in drastically smaller CSS files because all of the classes are reusable across different components.

### Common approach vs. my approach - example

Every time you write `display: flex;` you write 14 characters which have to somehow be stored in memory. In the following example, which has only two classes that use `display: flex;`, a total of 56 characters has been used (28 on class names, and 28 on `display: flex;`).

```html
<div class="some-class">…</div>
<div class="some-other-class">…</div>
```

```css
.some-class { /* 11 characters */
    display: flex; /* 14 characters */
    /* … */
}
.some-other-class { /* 17 characters */
    display: flex; /* 14 characters */
    /* … */
}
```

The next example, which also has only two elements that use `display: flex;`, only uses 19 characters in CSS.
```html
<div class="d:f …">…</div>
<div class="d:f …">…</div>
```

```css
.d\:f { display: flex; } /* 5 + 14 characters */
```

**The larger the project, the more memory efficient this gets.**

## My problem with other utility frameworks

Some of their class are too abstract:
```css
.rounded { border-radius: .25rem; }
```

My classes are absolutely descriptive:
```css
.bo-rd\:.25 { border-radius: .25rem; }
```

# Principles

## 1. Easy and consistent syntax

I approached this with a simple principle wanting to compress `property: value` into `p:v`. Similarly, `property-name: value-name` is compressed to `p-n:v-n`.

*Escape string note:*

In order to create a `p:v` class in CSS, the `:` has to be escaped:
```css
.p\:v { property: value; }
```
This also applies to other symbols (`@`, `.`, `%`)

## 2. Default units

I wanted to avoid writing units with class names (`p:1` instead of `p:1rem`). I most commonly use `rem` unit on `width`. But I also sometimes use `%`. So in order to reduce memory usage, I have decided to not write unit characters in **most commonly** used cases.

```css
.w\:1 { width: 1rem; } /* w:1 instead of w:1rem */
.w\:100\% { width: 100%; }
```

## 3. Abstracting complexity

I had no idea how I would turn something like `max-width: min(80vw, 60rem);` (example container width) into a class, so I decided to turn such complex declarations into custom properties. 

```css
:root {
  /* … */
  --ex-ct-1: min(80vw, 60rem); /* example container 1 */
  /* … */
}

.mx-w\:ex-ct-1 { max-width: var(--ex-ct-1); }
```

# Closing

I made this in plain CSS so it's easier for new developers to adapt. It's also easy to edit and customise to whatever your needs are. The principle is set. It's easy to add future CSS properties in a similar fashion.