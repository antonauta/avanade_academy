function dropElements(){
    const array = arguments[0];
    let response = []; 
    const anonymousFunction = arguments[1];

    array.forEach(function(value) {
        if(anonymousFunction(value)){
            response.push(value);
        }
    });
    
    return response;
}