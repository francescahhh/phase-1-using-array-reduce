const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(totalBatteries)

// describe('reducer', function() {
//     describe('batteries', function() {
//       it('should have a `totalBatteries` variable', function() {
//         expect(totalBatteries).to.exist;
//       });
  
//       it('should have a number as a result', function() {
//         expect(totalBatteries).to.be.a('number');
//       });
  
//       it('should have made the sum of all the assembled batteries', function() {
//         expect(totalBatteries).to.eql(31);
//       });
//     });
//   });


// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = (previousValue, currentValue) => previousValue + currentValue;

// (batteryBatches.reduce(totalBatteries)); 
