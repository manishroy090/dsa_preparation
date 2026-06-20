//solve with naive approch with 0(n) times complexity
function NoneRepeatingChar(s1){
    let temp=s1;
     s1=s1.split('');

     let n =s1.length;

     let result ;

    for(i=0;i<n;i++){
      let count =  temp.split(s1[i]).length-1;

      if(count ==1){
         result = s1[i];
         break
      }
    }
    return result;

}

let s1= "manisha";
const result = NoneRepeatingChar(s1);

console.log("result",result);