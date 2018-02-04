# Sticky Element
Sticky Element is a simple independent JavaScript function to stick any html element to a specific height. It's simple to use and can be triggered based on scroll position. Perfect examples are – fixed top menu bar, fixed html element on scrolling down or scrolling up a specific amount etc.

## Getting Started
To use Sticky Element simply add 'stickyelement.min.js' script from distribution directory to your project. Link to instation [instruction](https://jaberibnemahboob.github.io/sticky-element/).
```
<script src="dist/js/smooth-scroll.js"></script>
```

## Examples 1
To stick a menu bar at the top of the window position, follow the code below. Visit to check online [here](https://jaberibnemahboob.github.io/sticky-element/example1.html).
```
let topMenuBar = new StickyElement({
  element: ".stickynav",
  stickTo: 0,
  scrollTowards: "none"
});
```
`1. 'element' is the selector name of the html element`

`2. 'stickTo' is the top offset of the position`

`3. 'scrollTowards' which scroll movement will trgger to stick the element. Values can one of these three "none", "down" and "up"`


## Example 2
If a menu bar normally has a static position with having an offset from top of the window, and you want to stick it to the top while scrolling down. Then follow the code below. Visit to check online [here](https://jaberibnemahboob.github.io/sticky-element/example2.html). 
```
let topMenuBar = new StickyElement({
  element: ".stickynav",
  stickTo: 0,
  scrollTowards: "down"
});
```

## License
The code is available under the [MIT License](LICENSE).