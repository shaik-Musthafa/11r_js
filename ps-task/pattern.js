let rows = +prompt("Enter the number of rows: ");
for (let i = 1; i <= rows; i++) {
    let res = "";
    for (let j = 1; j <= rows; j++) {
        if (j === i || i + j === rows + 1) {
            res += i+" "; 
        } else {
            res += "  "; 
        }
    }
    console.log(res);
}

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