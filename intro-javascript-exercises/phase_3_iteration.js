Array.prototype.bubbleSort = function(callback) {
    if (callback === undefined) {
        callback = function(el1, el2) {
            return el1 > el2;
        };
    }

    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], this[i + 1])) {
                sorted = false;
                
                const a = this[i];
                const b = this[i + 1];
                this[i] = b;
                this[i + 1] = a;
            }
        }
    }

    return this;
};

String.prototype.substrings = function() {
    let substringArr = [];

    for (let i = 0; i < this.length; i++) {
        for (let length = 1; length <= this.length; length++) {
            let substring = this.slice(i, length);
            if (!substringArr.includes(substring) && 
                substring ) {
                substringArr.push(substring);
            }
        }
    }  

    return substringArr;
};