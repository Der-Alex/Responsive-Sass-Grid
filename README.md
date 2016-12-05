# Responsive-Sass-Grid
This is a responsive grid created with grunt and sass.
The main features are: 
- Mobile first
- Nesting
- Push and pull

## Why another grid?
The big frontend frameworks like Bootstrap or Zurb Foundation come with a large feature set. They work really good but I often don't need all these features. Sometimes the give me too much and sometimes they just don't fit my needs. When I am working on projects, I also want to have small files. I don't want to have a client download Megabytes of frontend resources just for a cool design. So my grid is kind of lightweight and has just 1.56kb minified.

## How to use it?
The grid itsel is naked and comes with no styling at all. No grid cell padding, no colors, just a grid layout. So you have the full control of it, while it is easy to extend.
The main container for a grid section has to be an element with a *.row* class. This one defines a grid row and has a clearfix.

The row itself should not be used alone. So a child element with a specific column class has to be used inside.
You can use the following mobile first classes on the child elements for small layouts:

- .full
- .half
- .one-third
- .two-third
- .one-quarter
- .three-quarter

If you don't add any other mediaquery based class, these classes will work from small up to large layouts.


For medium sized devices you can add a *m- prefix* to these classes, e.g. *.m-half* or *.m-two-third*
For large sized devices you can specify an amount of columns with the *$column-count* sass variable. The default value is 12.
It generates *.col-n-of-m* classes, e.g. *.col-1-of-12* or *.col-4-of-12*. Also it generates *.push-n* and *.pull-n* classes for pushing and pulling these columns.

Nesting works easily too. Inside your *.row* container you define a column (like *.full* or *.col-6-of-12*) and inside your column you define another *.row* container with another column(s). 
It's just like Inception but with grid layout :-D

Additionally I tried to document the sources well, so please have a look at them. Maybe this explains certain behaviour better.

## Built with npm and Grunt
For development I use the latest version of NodeJs LTS (6.9.1). My package.json comes with grunt, some sass and css grunt tasks and lite-server. You can use the *npm run start* to run the grunt watcher and to build the grid. 
*npm run serve* starts the lite-server. A basic configuration for the lite-server is inside the lite-config.json file at the root folder.

## Contribute?
Use my grid or fork it. It's up to you. If you like it, I'd be looking forward to get a short comment :)
