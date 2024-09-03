function hello(x,y){
    for(i=x;i<=y;i++){
        if(i%2==0 && i%3==0){
            console.log(`${i} fizzbuzz`)
        } else if(i%2==0){
            console.log(`${i} fizz`);
        } else if(i%3==0){
            console.log(`${i} buzz`);
        }
        // else{
        //     console.log("ntg");
            
        // }
    }
}
hello(20,40)