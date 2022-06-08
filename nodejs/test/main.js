function Node(name) {
    this.left = null;
    this.right = null;
    this.name = name
    this.preEach = () => {
        console.log(this)
        if (!this.left) {
            this.left.preEach();
        }
        if (!this.right) {
            this.right.preEach();
        }

    };
}

let root = new Node('root');
let l = new Node('l');
let r = new Node('r');
let ll = new Node('ll');
let lr = new Node('lr');
let rl = new Node('rl');
let rr = new Node('rr');
root.left = l;
root.right = r;
l.left = ll;
l.right = lr;
r.left = rl;
r.right = rr;
console.log(root)

root.preEach();
