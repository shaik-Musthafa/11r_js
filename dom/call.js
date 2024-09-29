// let obj1={
//     name:"heee",
//     fun:function demo(){
//         console.log("hell"+" "+ this.name,this.age);
//     }
// }
// let obj2={
//     name:"hee",
//     age: 10
// }
// obj1.fun.call(obj2)
let theatre={
    movie_name:"mve2",
    screen:"screen1",
    fun:function demo(x,y){
        console.log(`movie- ${this.movie_name} is playing in ${this.screen} daily ${x} starts at ${y}`)
    }
}
let devara={
    movie_name:"devara",
    screen:"screen1"
}
let og={
    movie_name:"og",
    screen:"screen1"
}
let pg={
    movie_name:"pg",
    screen:"screen1"
}
//using call method
// theatre.fun.call(devara,"2shows","3am")
// theatre.fun.call(og,"2shows","3am")
// theatre.fun.call(pg,"2shows","3am")
//using apply method
// theatre.fun.apply(devara,["shows","3am"])
// theatre.fun.apply(og,["2shows","3am"])
// theatre.fun.apply(pg,["2shows","3am"])
//using bind method
let obj = theatre.fun.bind(devara)
obj("4shows","5am")
obj("3shows","5am");obj("4shows","5am")
const obj_1= theatre.fun.bind(og)
obj_1("4shows","5am");obj_1("3shows","5am");obj_1("4shows","5am")
const obj_11= theatre.fun.bind(pg)
obj_11("4shows","5am");obj_11("3shows","5am");obj_11("4shows","5am")