# Sticky Element
Sticky Element is a simple independent JavaScript function to stick any html element to any specific position. It's simple to use and triggered based on scroll position. Perfect examples are – fixed top menu bar, fixed html element on scrolling down or scrolling up a specific amount, or a social icon to a specific position etc.

## Getting Started
To use Sticky Element simply add 'stickyelement.min.js' script from distribution directory to your project. Link to instation [instruction](https://jaberibnemahboob.github.io/sticky-element/).
```
<script src="dist/js/stickyelement.min.js"></script>
```

## Examples 1
To stick a menu bar at the top of the window position, follow the code below. Visit to check online [here](https://jaberibnemahboob.github.io/sticky-element/example1.html).
```
let topMenuBar = new StickyElement({
  element: ".stickynav",
  stickToX: 0,
  stickToY: 0,
  scrollTowards: "none"
});
```
`1. 'element' is the selector name of the html element`

`2. 'stickToX' is the left offset of the position`

`3. 'stickToY' is the top offset of the position`

`4. 'scrollTowards' which scroll movement will trgger to stick the element. Values can one of these three "none", "down" and "up"`


## Example 2
If a menu bar normally has a static position with having an offset from top of the window, and you want to stick it to the top while scrolling down. Then follow the code below. Visit to check online [here](https://jaberibnemahboob.github.io/sticky-element/example2.html). 
```
let topMenuBar = new StickyElement({
  element: ".stickynav",
  stickToX: 0,
  stickToY: 0,
  scrollTowards: "down"
});
```

## License
The code is available under the [MIT License](LICENSE).