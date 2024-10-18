rows=+prompt("enter rows: ")
for(i=0;i<rows;i++){
    res="",alpha=65
    for(j=1;j<=rows-i;j++){
        res+=String.fromCharCode(alpha)
        alpha++
    }
    if(i==0){
        console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))
    }else{
        console.log(res+" ".repeat(2*i-1)+res.split("").reverse().join(""))
    }
}
// node /tmp/MCFRGVvgKC.js
// enter rows: 7
// ABCDEFGFEDCBA
// ABCDEF FEDCBA
// ABCDE   EDCBA
// ABCD     DCBA
// ABC       CBA
// AB         BA
// A           A
rows=+prompt("enter a num: ")
alpha=65; pos=1
for(i=0;i<=rows;i++){
    res=" "
    for(j=1;j<=i;j++){
        res=res+String.fromCharCode(alpha)+" "
        pos++
        alpha++
    }
    for(k=0;k<rows-i;k++){
        res=res+"  "
    }
    console.log(res.split("").reverse().join(""));
}
// node /tmp/7f1dxs2FgP.js
// enter a num: 5
           
//          A 
//        C B 
//      F E D 
//    J I H G 
//  O N M L K 
