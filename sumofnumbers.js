const testData = [1,2,3,4,5];

function sumFor(list){
  let total = 0;
  for(let i = 0; i < list.length; i++){
    total += list[i];
  }
  return total;
}

console.log(sumFor(testData));

function sumWhile(list){
  let total = 0;
  let i = 0;
  while(i < list.length){
    total += list[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testData));

function sumRecursion(list, length){
  if(length <= 0) return 0;
  return sumRecursion(list,length-1) + list[length-1];
}

console.log(sumRecursion(testData, testData.length));

function sumTheSimpleWay(list){
  return _.reduce(list, function(memo, num){
    return memo + num;
  }, 0)
}

console.log(sumTheSimpleWay(testData));