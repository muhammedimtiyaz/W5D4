Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    const mappedArray = [];

    this.myEach(function(el) {
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

    this.slice(i, this.length).myEach(function(el) {
        accumulator = cb(accumulator, el);
    });

    return accumulator;
};