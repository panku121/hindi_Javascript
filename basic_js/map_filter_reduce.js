
// =====================  MAP()  ===========================

// map() function is to transform an Array. map always return the same lenth of array.
// map() function iterate each elements from array and implement the logic on each element.

const arr = [5,2,7,6,8,1];
const output = arr.map(tripple);

function double(x){
    return x*2;
}
function tripple(x) {
    return x * 3;
}
const newOutput = arr.filter( (x) => x > 20 )
// console.log(output)
// console.log(newOutput)


// =====================  FILTER()  ==========================
 
// filter() method comes into the picture as map() function did not filtering out the array and did not reduce the length of array so filter comes into the picture.
// filter()   In array filter() method is used to filtering out the array in a given Condition.
// It will return the filtered or reduced array length.
// In whole array filter will return the only the array elements which fulfill the condition you said to.

const arr2 = [1,5,7,8,4,2,6,4];
const arrayElementGreaterThan2 = arr2.filter( (x)=> x > 2 )  //out put > [ 5, 7, 8, 4, 6, 4 ]; here only those elements filtered out which fulfiled the provided condition.
const findOddInArray = arr2.filter( (x)=> x % 2 ) //output > [ 1, 5, 7 ];
// console.log( findOddInArray )


// TASK : to find out the age of the people whose age is more then 25; 
const groupOfPeep = [
    {fname:'pankaj', lastName:'kumar', age:20},
    {fname:'pankaj', lastName:'kumar', age:20},
    {fname:'pankaj', lastName:'kumar', age:20},
    {fname:'prashant', lastName:'singh', age:28},
    {fname:'prashant', lastName:'singh', age:28},
    {fname:'prashant', lastName:'singh', age:28},
    {fname:'hema', lastName:'singh', age:70},
    {fname:'hema', lastName:'singh', age:70},
    {fname:'hema', lastName:'singh', age:70},
    {fname:'hema', lastName:'singh', age:70},
    {fname:'abhishek', lastName:'tomer', age:35},
]
const ageAbove25 = groupOfPeep.filter( ( x ) => x.age > 25 ).map( (x) => x.fname );     //output: [ 'prashant', 'hema', 'abhishek' ]
// console.log( ageAbove25 );

const ageAboveByReduce = groupOfPeep.reduce( ( accum, current ) => {
    if ( current.age > 25 ) {
        accum.push(current['fname'])
    }
    return accum;
}, [] )
// console.log( ageAboveByReduce )




// =====================  REDUCE()  ==========================

// dont confuse with the word reduce as it does not reduce anything from array.
// reduce() function is used at a place where you have to take all the elements of an array and come up with the single out of them.
const arr3 = [5,8,3,4,1,8,5,12];

// in traditional way how to add all elelments of arr3.
function findSum(arr) {
    let sum = 0;
    for ( let i=0; i<arr3.length; i++ ) {
        sum = sum + arr[i];
    }
    return sum;
}
// console.log( findSum(arr3) )


// Same add function with reduce() method ==>>
// reduce() method takes two parameter fist parameter is function and second parameter is initial value of output. and function which is first parameter also takes two parameter one is accumulator and second is current value.

const outputForSum = arr3.reduce( function ( accum, curr ){
    return accum = accum + curr;
}, 0 )
// console.log( outputForSum )

const findLargeElement = arr3.reduce(function findLarge(accum, current) {
    if (current > accum) {
        accum = current;
    }
    return accum;
}, 0)
// console.log( findLargeElement )


//find the full name of the below array.
const users = [
    {fname:'pankaj', lastName:'kumar', age:20},
    {fname:'prashant', lastName:'singh', age:28},
    {fname:'hema', lastName:'singh', age:70},
    {fname:'abhishek', lastName:'tomer', age:35},
]
const fullName = users.map( (x) => x = x.fname + " " + x.lastName );
// console.log( fullName )


//find the users whose have the same age group and how many they are:
const diffrentAge = [
    {fname:'pankaj', lastName:'kumar', age:20},
    {fname:'prashant', lastName:'singh', age:28},
    {fname:'hema', lastName:'singh', age:20},
    {fname:'abhishek', lastName:'tomer', age:35},
    {fname:'vishant', lastName:'tomer', age:35},
    {fname:'vishant', lastName:'tomer', age:35},
]
const diffAge = diffrentAge.reduce( function( accum, current ){
    if ( accum[current.age] ){
        accum[current.age] = ++accum[current.age]; 
        // accum[current.age] = accum[current.age]+1; //both above line are same meaning;
    } else {
        accum[current.age] = 1;
    }
    return accum
}, {})
// console.log(diffAge)