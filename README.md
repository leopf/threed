# 3D Design System

A lightweight Web Component and accompanying CSS to create simple 3D blocks and 3D effects.

---

## Installation

1. Include the CSS file in your HTML:

   ```html
   <link rel="stylesheet" href="threed.css" type="text/css" />
   ```
2. Include the JavaScript file after loading the CSS:

   ```html
   <script src="threed.js"></script>
   ```

---

## Usage

Wrap your content with a `<threed-element>` tag to make it appear in a 3D container. For a basic example without any interaction or visual customization:

````html
<threed-element>
  Simple static content
</threed-element>

Use the class `.threed-active` to enable the press (active) effect:

```html
<div class="threed-active">
  <threed-element>
    <b>Hello Mars!</b>
  </threed-element>
</div>
````

When the wrapper is pressed (e.g., clicked or tapped), the element will appear to shrink.

---

## CSS Custom Properties

All configurable properties live under the `:root` scope by default. You can override these in your own stylesheet or inline to customize appearance and behavior.

| Property                 | Default   | Description                                   |
| ------------------------ | --------- | --------------------------------------------- |
| `--threed-rot-x`         | `0.1deg`  | Initial rotation around the X‑axis.           |
| `--threed-rot-y`         | `-0.1deg` | Initial rotation around the Y‑axis.           |
| `--threed-depth`         | `200rem`  | Depth (thickness) of the 3D block.            |
| `--threed-active-depth`  | `150rem`  | Depth when the element is active (pressed).   |
| `--threed-color-top`     | `#ddd`    | Color of the top face of the block.           |
| `--threed-color-bottom`  | `#aaa`    | Color of the bottom face of the block.        |
| `--threed-color-left`    | `#bbb`    | Color of the left face of the block.          |
| `--threed-color-right`   | `#ccc`    | Color of the right face of the block.         |
| `--threed-color-content` | `white`   | Background color of the content (front face). |

### Overriding Variables

To override any property, redefine it in a selector that applies to your component or page. For example:

```css
.my-container {
  --threed-rot-x: 5deg;
  --threed-color-top: #f0f;
}
```

---

## Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3D Design System Demo</title>
    <link rel="stylesheet" href="threed.css" type="text/css" />
    <script src="threed.js"></script>
    <style>
      body {
        background-color: black;
        padding: 5rem;
      }

      /* Customizing the 3D block */
      .demo {
        --threed-color-right: #ff8c00;
        --threed-color-bottom: #cc7000;
      }
    </style>
  </head>
  <body>
    <div class="threed-active demo">
      <threed-element>
        <div style="padding: 0.1rem 1rem">
          <h1>threed</h1>
          <b>simple 3d web styling</b>
          <p>Press me!</p>
        </div>
      </threed-element>
    </div>
  </body>
</html>
```

---

## Browser Support

* Modern browsers with Web Components support (Chrome, Firefox, Safari, Edge).
* No polyfills included; add your own if you need broader compatibility.

---

## License

MIT License. Feel free to modify and redistribute! Enjoy creating in 3D!
