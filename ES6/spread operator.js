function add(...x){
    var sum=0;
    for(i=0;i<x.length;i++){
        sum+=x[i];
    }       
    return sum;
}
console.log(add(1, 2, 3, 4));