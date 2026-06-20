function reverse(s, start, end) {
  while (start < end) {
    let tmp = s[end];
    s[end] = s[start];
    s[start] = tmp;

    start++;
    end--;
  }

}

function reverseWords(s) {
  s = s.split("");
  reverse(s, 0, s.length - 1);

  let n = s.length;
  let i = 0;

  for (let l = 0; l < n; ++l) {

     if(s[l] !=='.'){
        if(i!==0) s[i++]='.'

        let r = l

        while(r < n && s[r]!=='.') s[i++] =s[r++];
        reverse(s,i-(r-l),i-1);
        l=r;

     }
  }

  return s.slice(0,i).join('');
}
// let s = "i.like.this.program.very.much";
let s = "..geeks..for.geeks.";
// let s = "...home......";

console.log(reverseWords(s));
