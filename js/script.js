"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var foo = function(bar) {
  return false;
};

var primeSift = function(number) {
  var numbers = [];
  for (var i = 2; i <= number; i++) {
    numbers.push(i);
  }

  var result = sift(numbers, 0);
  console.log("result contains: " + result.toString());
  return result;
}

var sift = function(primes, index) {
  var prime = primes[index];

  if (prime === primes[primes.length - 1]) {
    console.log(primes.toString())
    return primes;
  } else {
    primes.forEach(function(number) {
      //console.log(number);
      if (number !== prime && number % prime === 0) {
        //console.log(number + ' is divisible by ' + prime + ' prime - pop it from array');
        var i = primes.indexOf(number);
        primes.splice(i, 1);
      }
    });

    console.log("recursing with " + (index + 1).toString());
    console.log("primes array contains: " + primes.toString());

    return sift(primes, index + 1);
  }

}
