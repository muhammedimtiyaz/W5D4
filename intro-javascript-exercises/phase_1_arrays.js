Array.prototype.uniq = function() {
    const uniqEls = [];

    this.forEach(function(el) {
        if (!uniqEls.includes(el)) {
            uniqEls.push(el);
        }
    });

    return uniqEls;
};

Array.prototype.twoSum = function() {
    const twoSumIndices = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                twoSumIndices.push([i, j]);
            }
        }
    }

    return twoSumIndices;
};

Array.prototype.transpose = function() {
    const transposedArray = [];

    for (let i = 0; i < this.length; i++) {
        const row = [];

        for (let r = 0; r < this.length; r++) {
            row.push(this[r][i]);
        }

        transposedArray.push(row);
    }

    return transposedArray;
};