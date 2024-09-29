let name = prompt("Enter your name: ");
count= 0; 
 for (let i = 1; i <= name.length; i++) {
    let res = "";
    let chars= 0;
    for (let j = 1; j <= i; j++) {
        if (count < name.length) {
            res += name[count] + " ";
            count++;
        } else {
            res += "* "; 
        }
        chars++;
    }
    console.log(res);
    if (count >= name.length && chars === i) {
        break;
    }
}
// let name = prompt("Enter a string: ");
// for (let i = 1; i <= name.length; i++) {
//     let res = "";
//     for (let j = 1; j <= name.length; j++) {
//         if (j === i || i + j === name.length + 1) {
//             res += name[i-1] + " ";
//         } else {
//             res += "  "; 
//         }
//     }
//     console.log(res);
// }

