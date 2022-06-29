/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  //const incrementedGidits = []
  let remainder=0
  if(digits[digits.length-1]<9){
      digits[digits.length-1]++;
      return digits;
  }
for(let i=digits.length-1;i>=0;i--){
  
  if(digits[i]==9){
      digits[i]=0
      remainder++;
   if(digits[i-1]!== 9)   {
       break;
   }
  }
}
  if(digits.length == remainder){
      digits.splice(0,0,1)
  }else if(remainder < digits.length){
      digits[digits.length-1-remainder]++
  }
  return digits
};
