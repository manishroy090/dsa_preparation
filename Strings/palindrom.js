function palindaromcheck(strval){

    let left = 0;

    let right = strval.length-1;


    while(left < right){

        if(strval[left]!== strval[right]){
            return 0;
        }

        left++;
        right--;
    }


  return 1;

}

//used two pointer approch

const Stringval = "abba"

const result = palindaromcheck(Stringval);

console.log(result);
