// rows=+prompt("enter rows: ")
// for(i=0;i<rows;i++){
//     res="",alpha=65
//     for(j=1;j<=rows-i;j++){
//         res+=String.fromCharCode(alpha)
//         alpha++
//     }
//     if(i==0){
//         console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))
//     }else{
//         console.log(res+" ".repeat(2*i-1)+res.split("").reverse().join(""))
//     }
// }
// //ABCDEFGFEDCBA
//ABCDEF FEDCBA
//ABCDE   EDCBA
//ABCD     DCBA
//ABC       CBA
//AB         BA
//A           A
