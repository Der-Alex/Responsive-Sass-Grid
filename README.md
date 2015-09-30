# Responsive-Sass-Grid
This is a responsive grid created with grunt and sass.
The main features are: 
- Mobile first
- Nesting
- Push and pull

## How to use
The application has to be wrapped by an element with a *.container* class. From here you can define the outer gap of your site and the max width.
Inside the container has to be an element with a *.row* class. This one defines a grid row and has a clearfix.
From here you can use the following mobile first classes on the child elements:
- .full
- .half
- .one-third
- .two-third
- .one-quarter
- .three-quarter

For medium sized devices you can add a *m- prefix to these classes, e.g. *.m-half* or *.m-two-third*
For large sized devices you can specify an amount of columns with the *$column-count* sass variable. The default value is 12.
It generates *.col-n-of-m* classes, e.g. *.col-1-of-12* or *.col-4-of-12*.

## Important!
This grid is created for my personal needs. It is my first attempt so it may be buggy. Please use with caution :)
