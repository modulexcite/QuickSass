##QuickStart
This is a stripped down and adapted version of @toddmotto's FireShell.
I created this for my own pesonal use. Created so I can simply <code>$ git clone</code> the repository, add the folder to CodeKit and I'm already set up to go. 


It contains:
* A modular approach to SCSS, broken up into modules and partials
* Normalize is also modularized 
* Custom mixins that Compass doesn't have
* Custom placeholders for clearfix and absolute centering
* DNS prefetching for Analytics


###New feature
You can link Javascript with the SCSS media queries names found in _breakpoints.scss.

Eg.

<pre>
var mQuery = window.getComputedStyle(document.body,':after').getPropertyValue('content');

if (mQuery.indexOf("stewie") !=-1) {
 // Do something 
}
</pre>
