
// function autoIncrementCustomId(lastRecordId){
//     let increasedNum = Number(lastRecordId.replace('USR','')) + 1;
//     let kmsStr = lastRecordId.substr(0,3);
//     for(let i=0; i< 1 - increasedNum.toString().length; i++){
//       kmsStr = kmsStr+'0';
//     }
//     kmsStr = kmsStr + increasedNum.toString();
//     console.log(kmsStr);
//   }
  
//   autoIncrementCustomId('USR1')

var alphanumeric = require('alphanumeric-id');
 
console.log(alphanumeric(5));