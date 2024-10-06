let rows = +prompt("Enter the number of rows: ");

for (let i = 1; i <= rows; i++) {
    let res = ""; 
    for (let j = i; j >= 1; j--) {
        res += j + " "; 
    }
    console.log(res); 
}
// node /tmp/g8i7tUo0T1.js
// Enter the number of rows: 4
// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 
let rows = +prompt("Enter the number of rows: ");
for (let i = 1; i <= rows; i++) {
    let res = ""; 
    let num = 2 * i; 
    for (let j = 1; j <= i; j++) {
        res += num + " ";
        num += 2 * (rows - j); 
    }
    console.log(res)
}
// node /tmp/pyjXWb9osB.js
// Enter the number of rows: 4
// 2 
// 4 10 
// 6 12 16 
// 8 14 18 20 

