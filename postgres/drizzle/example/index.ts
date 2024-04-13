const s:string = "hi";

console.log(s);

const my = ['hi',{'key':'sex'}, 'bue', 1,2];

my.map(item=> console.log(item));

console.log(true=== my.every(item=>item) && my.every(item=>item)); 