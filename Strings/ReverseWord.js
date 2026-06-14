function reverse(s, start, end) {
  while (start < end) {
    //store start value on temp
    let temp = s[start];
    //store end value on start
    s[start] = s[end];
    //now store the start value that store on the tem on end
    s[end] = temp;
    start++;
    end--;
  }

  return (s[start] = s[end]);
}
function reverseWords(s) {
  //if we write space its converted to one index
  s = s.split("");

  reverse(s, 0, s.length - 1);

  let n = s.length;

  let i = 0;

  let check = [];

  for (let l = 0; l < n; ++l) {
    //not equal to . constraint

    if (s[l] !== ".") {
      // console.log(s[l]);
      if(i!==0) s[i++] = '.';

       let r = l;

      
       while(r < n && s[r]!=='.') s[i++]


    }
  }

  // return check;
}

// let s = "i.like.this.program.very.much";
let s = "..geeks..for.geeks.";
// let s = "...home......";

console.log(reverseWords(s));
