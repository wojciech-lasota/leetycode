/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let aLength = a.length-1
    let result=[]
    let sum=0
    let bLength = b.length-1
    let carryBit =0
    
    while(aLength >=0 ||
          bLength >=0){
        a[aLength]!=undefined?sum+=parseInt(a[aLength]):0
        b[bLength]!=undefined?sum+=parseInt(b[bLength]):0
        sum+=carryBit
        if(sum==0){
            result.splice(0,0,0)
            carryBit=0
        }else if(sum ==1){
            result.splice(0,0,1)
            carryBit=0
        }else if(sum==2){
            result.splice(0,0,0)
            carryBit=1
        }else if(sum==3){
            result.splice(0,0,1)
            carryBit=1
        }
        sum=0
        aLength--
        bLength--
    }
     carryBit>0?result.splice(0,0,carryBit):0
     return result.join("")
 };
