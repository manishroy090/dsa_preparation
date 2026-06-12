function reverseString(strVal){

    let left = 0;

    let right = strVal.length-1;

    let result='';

    while(left <=right){

       result +=strVal[right];

       right--;

    }

    return result;
  
}


const strVal= "manish"

const result = reverseString(strVal);

console.log("result",result);