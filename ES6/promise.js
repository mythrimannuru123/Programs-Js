// promise function//
    var promise = new Promise(function(resolve,reject){
        var a = 10;
        var b = 20;
        if(a+b < 25){
            resolve("sum is greater than 25");
        }
        else{
            reject("sum is less than 25");
        }
    });
    promise.then(function(result){
        console.log(result);
    }).catch(function(error){
        console.log(error);
    });