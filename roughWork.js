const arr = [1,6,3,4,5,2,7,8,9];
console.log(Object.keys(arr));
console.log(arr);
const newArr = arr.map((element, index) => {
    return element*index;
})
const filterArr = newArr.filter((element,index) => element%3===0);
const reducedNumber = arr.reduce((previous, element, index)=>{
    return previous+=element-index;
})
console.log(newArr);
console.log(filterArr);
console.log(reducedNumber);
const sortedArr = arr.sort();
console.log(sortedArr);
