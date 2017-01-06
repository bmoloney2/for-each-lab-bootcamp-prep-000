function iterativeLog(array){
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var myArr = [77, 78, 79];
  myArr.forEach(callback);
  return myArr;
  }

function doToArray(array, callback){
  array.forEach(callback);
}
