let nums = [3,2,3] ;
let target = 6 ;

    for (let i =0 ; i<nums.length ; i++){
        let y = i -1 ;
        let ans = nums[y] + nums[i];

        if(ans === target){
            console.log(`[${y},${i}]`);
        }
    } // wrong approch 

var twoSum = function(nums, target) {
    for (let i =0 ; i<nums.length ; i++){
       for (let j = i+1 ; j<nums.length ; j++){
        if((nums[i]+nums[j])=== target){
            return [i , j]
        }
       }
    }
    
};
let anss  = twoSum(nums,target);
console.log(anss)
