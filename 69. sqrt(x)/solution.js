/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
    let start =0;
     let end = x;
     let wanted =0;
     while(start <= end){
         let middle = Math.floor(start+(end-start)/2)
         if(middle*middle<=x){
             wanted = middle
             start = middle+1
         }else{
             end = middle -1
         }
     }
     return wanted
 };
