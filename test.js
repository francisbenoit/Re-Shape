var str = "apple ban";
var strArr=str.split(" ").map(function(x){  return x + " "+ x.length; });
console.log(strArr);
