Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    
    const mappedArray = [];
    this.myEach(function(el){
        mappedArray.push(callback(el));
    });

    return mappedArray;
};

Array.prototype.myReduce = function(cb, initialValue) {
    let i = 0;
    let accumulator = initialValue;
    
    if (initialValue === undefined) {
        accumulator = this[i];
        i++;
    }

    while (i < this.length) {
        accumulator = cb(accumulator, this[i]);

        i++;
    }

    return accumulator;
};