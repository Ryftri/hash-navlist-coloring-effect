## Havigate
Havigate is a solution to make it easy to create list item and anchor navigation coloring effects in PWAs and single-page apps. By using effect logic when changing url hashes and changing without needing to write long code.

## Demo
The demo can be seen on the portfolio website which I uploaded on my github pages. [Demo page](https://ryftri.github.io/myportofolio.github.io/)

## Installation

```bash
npm install @ryftri/havigates
```

## Usage
**1. The HTML nav tag should be written like this.**

```html
<!-- The HTML nav tag should be written like this. -->
    <nav id="nav-drawer" class="navi">
        <ul class="list__nav">
            <li class="item__nav"><a class="link__nav" href="#/">Home</a></li>
            <li class="item__nav"><a class="link__nav" href="#/learnings">Learnings</a></li>
            <li class="item__nav"><a class="link__nav" href="#/projects">Projects</a></li>
        </ul>
    </nav>
```

**2. Add a style transition to the li tag according to the class or id.**

```css
.item__nav {
    transition: 1s ease;
}
```

**3. Writing code in javascript.**
```javascript
import Havigates from 'havigates';

const App = new Havigates({
// can be filled with class or id
  listItem: '.item__nav',

// to replace the base color given to the li tag.
  backgorundChange: '#E2DCC8',

// To change the text color on the anchor tag.
  colorChange: '#0F3D3E'
});
```
