// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const nums = [2,7,11,15]
const target = 9
let twoSum = function(nums,target){
    const hashSet = new Map()
    for (let i = 0; i < nums.length; i++) {
       
       let diff = target - nums[i]
        if(hashSet.has(diff)){
            return(i,hashSet.get(diff))
        }
        else {
            hashSet.set(nums[i],i)
        }
    }
}

console.log(twoSum)
