function destoyer() {
    let array = arguments[0]; 
    for(let i = 1; i < arguments.length; i++) {
        const value = arguments[i];
        array = removeValue(value, array);
    }
    return array;
}

function removeValue(item, array){
    let index = array.indexOf(item);
    while(index !== -1) {
        array.splice(index, 1);
        index = array.indexOf(item);
    }
    return array;
}