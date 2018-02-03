# Sticky Element
Sticky Element is a simple independent JavaScript function to stick any html element to a specific height. It's simple to use and can be triggered based on scroll position. Perfect examples are – fixed top menu bar, fixed html element on scrolling down or scrolling up a specific amount etc.

## Getting Started
To use Sticky Element simply add 'stickyelement.min.js' script from distribution directory to your project. 
```<script src="dist/js/smooth-scroll.js"></script>
```

## Examples 1
To stick a menu bar at the top of the window position, follow this code -
```let topMenuBar = new StickyElement({
element: ".stickynav", /* selector name of the html element, that you want to stick */
stickTo: 0, /* top offset of the position */
scrollTowards: "none" /* in which scroll evernt will trigger to stick the element. Possible 3 values are - 'down', 'up' and 'none' */
});
```

## Example 2
If a menu bar normally has a static position with having an offset from top of the window, and you want to stick it to the top while scrolling down. Then follow this code - 
```let topMenuBar = new StickyElement({
element: ".stickynav", /* selector name of the html element, that you want to stick */
stickTo: 0, /* top offset of the position */
scrollTowards: "down" /* in which scroll evernt will trigger to stick the element. Possible 3 values are - 'down', 'up' and 'none' */
});
```

## License
The code is available under the [MIT License](LICENSE).