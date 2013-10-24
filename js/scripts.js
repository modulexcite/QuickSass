(function ($, window, document, undefined) {

  'use strict';

  $(function () {




// http://darbybrown.com/2013/09/09/imgswap-super-simple-responsive-images.html

function checkImage(testUrl) { 
    var http = jQuery.ajax({
        type: "HEAD",
        url: testUrl,
        async: false
    });

    if (http.status == 200) {
        return true;
    } else {
        return false;
    }
}


function imgSwap() {

    var images = $('img[data-swap]'); 


    for (var i = 0; i < images.length; i++) {

        var imageFormat = images[i].src.substr(-4);
        var imageName = images[i].src.substr(0, images[i].src.length - 7);
        var sml = imageName + "sml" + imageFormat;
        var med = imageName + "med" + imageFormat;
        var lrg = imageName + "lrg" + imageFormat;


        if (window.devicePixelRatio > 1) { 
            if ($(window).width() > 480 && checkImage(lrg)) {
                imageName = lrg;
            } else {
                imageName = med;
            }

        } else if ($(window).width() > 900 && checkImage(lrg)) {
            imageName = lrg;

        } else if ($(window).width() > 480) {
            imageName = med;
        } else {
            imageName = sml;
        }


        images[i].src = imageName;
    }

}
imgSwap();

$(window).resize(function() { imgSwap(); });





// You can test for SCSS media queries using this.
// These names correspond to the names of the breakpoints in _breakpoints.scss:


var mQuery = window.getComputedStyle(document.body,':after').getPropertyValue('content');

if (mQuery.indexOf("stewie") !=-1) {
 //do something
}

if (mQuery.indexOf("brian") !=-1) {
 //do something
}

if (mQuery.indexOf("chris") !=-1) {
 //do something
}

if (mQuery.indexOf("lois") !=-1) {
 //do something
}

if (mQuery.indexOf("peter") !=-1) {
 //do something
}



  });

})(jQuery, window, document);
