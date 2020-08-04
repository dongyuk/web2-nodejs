// array, object

var f = function() {
    console.log(1+1);
    console.log(1+2);
}

// function input array
var a = [f];
a[0]();

// function input object
var o = {
    func:f
}
o.func();

// var i = if(true){console.log(1)}; // error
// var w = while(true){console.log(1)}; // error



