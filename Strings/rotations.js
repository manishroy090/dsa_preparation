function areRotations(s1, s2) {
  let n = s1.length;

  for (i = 0; i < n; i++) {
    if (s1 === s2) {
      return true;
    }

    let last = s1[n - 1];
    s1 = last + s1.slice(0, n - 1);
  }

  return false;
}

let s1 = "abcd";
let s2 = "badc";
const result = areRotations(s1, s2);

console.log(result ? "true" : "false");
