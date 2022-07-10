/**
 * @param {number} x
 * @return {number}
 */
//  var mySqrt = function(x) {
    
//     let start =0;
//      let end = x;
//      let wanted =0;
//      while(start <= end){
//          let middle = Math.floor(start+(end-start)/2)
//          if(middle*middle<=x){
//              wanted = middle
//              start = middle+1
//          }else{
//              end = middle -1
//          }
//      }
//      return wanted
//  };
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
    if(x ==0 || x ==1) return x
     
     let approximation1 = x-1
     let approximation2 = ((x/approximation1)+approximation1)/2
     while(Math.abs(approximation1 - approximation2) > 1){
         approximation1 = approximation2
         approximation2 = ((x/approximation2) + approximation2)/2
     }
     
     return Math.floor(approximation2)
 };
