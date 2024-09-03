// function palindrome(str){
//     let j = str.length-1
//     for(i=0;i<str.lenght/2;i++){
//         if(str[i]!=str[j]){
//             return "not a palindrome"
//         }
//         j--;
//     }
//     return "it is a palindrome"
// }
// let str1="hello"
// let str2="racecar"
// let str3="andhra"
// console.log(palindrome(str1))
// console.log(palindrome(str2));
// console.log(palindrome(str3));

// function Palindrome(str) {
//     let j = str.length - 1
//     for (i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return "not";
//         }
//         j--;
//     }
//     return "is";
// }
// let str1 = "racecar";
// let str2 = "olo";
// let str3 = "hello";

// console.log(Palindrome(str1));
// console.log(Palindrome(str2));
// console.log(Palindrome(str3));
// function palindrome(str){
//     j = str.legth-1
//     for(i=0;i<str.legth/2;i++){
//         if(str[i]!=str[j])
//         return "not"
//     }j--;
//     return "is"
// }
// let str1 ="maya"
// let str2 ="meera"
// let str3 ="radar"
// console.log(palindrome(str1));
// console.log(palindrome(str2));
// console.log(palindrome(str3));

// function palindrome(str) {
//     let j = str.length - 1; 
//     for (i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[j]) {
//             return "not"; 
//         }
//         j--; 
//     }
//     return "is"; 
// }

// let str1 = "maya";
// let str2 = "meera";
// let str3 = "radar";

// console.log(palindrome(str1)); 
// console.log(palindrome(str2)); 
// console.log(palindrome(str3)); 

//palindrome
// function palindrome(str){
    // let x = 0;
//     let y = str.length-1;
//     while(x<y){
//         if(str[x]!=str[y]){
//             return "not"
//         }
//         x++;
//         y--;
//     }
//     return "is"
// }
// let str1="hello"
// let str2="radar"
// console.log(palindrome(str1));
// console.log(palindrome(str2));

function palindrome(str){
    let x = 0;
    let y =str.length-1
    for(;
        x<y;x++,y--){
        if(str[x]!==str[y]){
            return "not"
        }
    }
    return "is"
}
let str1="12321"
// let str2="racecar"
// let str3="maya"
// console.log(palindrome(str1));
// console.log(palindrome(str2));
// console.log(palindrome(str3));
// //--
// function palindrome(str){
//     let x =0
//     let y=str.length-1
//     for(x=0;x<y/2;x++){
//         if(str[x]!=str[y]){
//             return false
//         }y--
//     }return true
// }
// let str1="1234321"
// let str2="hello"
// let str3 ="radar"
// console.log(palindrome(str1));
// console.log(palindrome(str2));
// console.log(palindrome(str3));
//--
// function palindrome(str){
//     let x =0
//     let y=str.length-1
//     for(x=0;x<y;x++,y--){
//         if(str[x]!=str[y]){
//             return false
//         }x++,y--
//     }return true
// }
// let str1="1234321"
// let str2="hello"
// let str3 ="radar"
// console.log(palindrome(str1));
// console.log(palindrome(str2));
// console.log(palindrome(str3));


// let str = "SomEThinG"
// let str1 = str.toLowerCase([])
// let str2 = str.toUpperCase([0,1,2,5,6,7]);
// console.log(str2);
// let str3 = "sOmEt"
