// 1. Uppercase
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase.
//     - Hints: Use the toUpperCase() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc", "def"]
//     - Output Test Cases: ["HELLO", "WORLD", "ABC"], ["XYZ", "ABC", "DEF"]

// function uppercase(arr){
//     let x=[]
//     for(i=0;i<arr.length;i++){
//             x.push(arr[i].toUpperCase())
//     }return x
// }
// let arr1= ["hello", "world", "abc"]
// let arr2 = ["xyz", "abc", "def"]
// console.log(uppercase(arr1))
// console.log(uppercase(arr2))
// 2. Substring
//     - Question: Write a function that takes an array of strings as input and returns a new array with the first 3 characters of each string.
//     - Hints: Use the substring() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abcdef"]
//     - Output Test Cases: ["hel", "wor", "abc"], ["xyz", "abc"]
// function demo(str){
//     let x = []
//     for(i of str){
//         x.push(i.substring(0,3))
//     }
//     return x
// }
// let str1= ["hello", "world", "abc"]
// let str2 = ["xyz", "abc", "def"]
// console.log(demo(str1))
// console.log(demo(str2))

// 3. Replace
//     - Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of "o" replaced with "0".
//     - Hints: Use the replace() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "foo", "bar"]
//     - Output Test Cases: ["hell0", "w0rld", "abc"], ["xyz", "f00", "bar"]
// function demo(str){
//     let x =[]
//     for (i of str){
//         x.push(i.replaceAll("o","0"))
//     }return x
// }
// let str1= ["hello", "world", "abc"]
// let str2 = ["xyz", "foo", "def"]
// console.log(demo(str1))
// console.log(demo(str2))

// 4. Split
//     - Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
//     - Hints: Use the split() method.
//     - Input Test Cases: ["hello-world", "abc-def"], ["xyz-abc-def"]
//     - Output Test Cases: ["hello", "world", "abc", "def"], ["xyz", "abc", "def"]
function demo(str){
    let x=[]
    for(i of str){
        x.push(i.split("-"))
    }
    return x
}
let str1 = ["hello-world", "abc-def"]
let str2 = ["xyz-abc-def"]
console.log(str1)
console.log(str2)

// 5. Filter
//     - Question: Write a function that takes an array of strings as input and returns a new array with only the strings longer than 5 characters.
//     - Hints: Use the filter() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "abcdef"]
//     - Output Test Cases: ["defghi"], ["abcdef"]

// 6.Map
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase and "!" appended.
//     - Hints: Use the map() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: ["HELLO!", "WORLD!", "ABC!"], ["XYZ!", "ABC!"]

// 7.Find
//     - Question: Write a function that takes an array of strings as input and returns the first string containing "o".
//     - Hints: Use the find() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "foo", "bar"]
//     - Output Test Cases: "world", "foo"

// 8.Join
//     - Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
//     - Hints: Use the join() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: "hello,world,abc", "xyz,abc"

