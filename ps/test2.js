// //1)
// arr=[2,5,6,8,6,23]
// sum=0.0;
// for(i=0;i<arr.length;i++){
//     if(i%2==(arr[1]-5)){
//         sum=sum+arr[i]
//     }
// }
// console.log(sum)
// node /tmp/7L40VVxLA9.js
// 14
// //2)
// arr =[2,5,6,8,6,23]
// count=0;
// for(i=0;i<arr.length;i++){
//     if(arr.includes(i)){
//         count--
//     }
// }console.log(count);
// //3)
// arr=[[6,4,5],[3,9,10],[33,88,22]]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i].join("."));
    
// }
// node /tmp/gwdpmK1QfS.js
// 6.4.5
// 3.9.10
// 33.88.22
//4)
// const arr = [1,2,3,4,5,6]
// const n=-1
// const result=arr.slice(0,n-1)
// console.log(result);
//node /tmp/UyTuw9sFFk.js
//[ 1, 2, 3, 4 ]
//node /tmp/xC5h9IgkKe.js
//N'th largest: 3
//N'th smallest 6
//5)
// let arr=[1,3,2,4,8,7,5,6]
// let n=3
// let largest=(arr,n)=>{
//     arr.sort((a,b)=>a-b)
//     return arr[n-1]
// }
// let smallest =(arr,n)=>{
//     arr.sort((a,b)=> b-a)
//     return arr[n-1]
// }
// console.log("N'th largest:", largest(arr,n));
// console.log("N'th smallest", smallest(arr,n));
//node /tmp/xC5h9IgkKe.js
//N'th largest: 3
//N'th smallest 6
//6)
// let arr = ["apple", "mango","apple", "orange", "mango", "mango"];
// console.log(arr.toString());
//node /tmp/t8MOXf7nGF.js
//apple,mango,apple,orange,mango,mango
//7)
// function checkSorted(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             return false
//         }
//     }
//     return true
// }
// const arr1=[32,39,48,56]
// const arr2=[22,65,1,39]
// console.log(checkSorted(arr1));
// console.log(checkSorted(arr2));
// node /tmp/Mmfc0OEgmN.js
// true
// false
//8)
// const arr = [2,7,9,4,3];
// let sum= [arr[0]]
// let i=1
// while(i<arr.length){
//     sum.push(arr[i]+sum[i-1])
//     i++
// }console.log(sum);
// node /tmp/iI9d3kxbKe.js
// [ 2, 9, 18, 22, 25 ]
//9)
// let arr=[4,8,7,13,12]
// let xyz=arr.reduce(function(x,y){
//     return x+y
// },0)
// console.log(xyz);
// node /tmp/SmWRddtXEn.js
// 44
//10)
// let arr=[[1],[2,3],[4],["GFG"]]
// console.log(arr.flat());
// node /tmp/dsRy466xzF.js
//[ 1, 2, 3, 4, 'GFG' ]
//Write a program that takes array of numbers, print the array in the sorted order (ascending) of the squares of numbers in the array.
// function asc(arr){
//     as=arr.map(num=>num*num)
//     as.sort((a,b)=>a-b)
//     console.log(as)
// }
// let arr1=[4, 6, 1, 2, 0]
// asc(arr1)
// [Running] node "/Users/shaikmusthafa/Desktop/11r_js/ps/test2.js"
// [ 0, 1, 4, 16, 36 ]
// Input arrays
// Taking input as a string of numbers, split by space, and converting them to integers
// let a= [1,2,-3,0,-4,-5]
// let a=[1,2,3,4,5,0]
// let max=0
// for(let i=0;i<a.length;i++){
// sub=1;
// for(let j=i;j<a.length;j++){
// sub=sub*a[j];
// if(sub>max)max=sub
// }
// }
// console.log(max)
// [Running] node "/Users/shaikmusthafa/Desktop/11r_js/ps/tempCodeRunnerFile.js"
// 120
