function sum(a,b,c){
    // console.log(arguments)
    const args = [...arguments]
    console.log(args)
    const result = a + b + c;
    return result;
}
const total = sum(5,8,4,6,8,5);
console.log(total);
console.log(sum.length);