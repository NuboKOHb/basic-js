const chainMaker = {
  getLength() {
    if (!this.chain) {this.chain = []}
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) {this.chain = []}
    if (value === undefined) {value = '';}
    this.chain.push(value);
    return this; 
  },
  removeLink(position) {
    if (!this.chain) {this.chain = []}

    if (typeof(position) !== 'number' || 
    (position - Math.trunc(position) !== 0) ||
    position < 1 || position > this.chain.length
    ) {
      this.chain = [];
      throw new Error;
    }

    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    if (!this.chain) {this.chain = []}
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.chain.length; i++ ) {
      if (i == 0) {
        result = `( ${this.chain[0]} )`;
      } else {
        result = result + `~~( ${this.chain[i]} )`;
      }
    }

    this.chain = [];
    return result;
  }
};
module.exports = chainMaker;
