/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const result = []
  for (let n of nums) {
    result.push(n ** 2)
  }
  return result.sort((a,b) => a-b)
}

// console.log(sortedSquares([-4,-1,0,3,10]))
// console.log(sortedSquares([-7,-3,2,3,11]))

var betterSortedSquares = function(nums) {
  // const findMinPlus = (items) => {
  //   let index = 0
  //   let minValue = Math.abs(items[index])
  //   for (let i = 0; i < items.length; i++) {
  //     let value = Math.abs(items[i])
  //     if (value < minValue) {
  //       index = i
  //       minValue = value
  //     }
  //   }
  //   return index
  // } 

  // const start = findMinPlus(nums)
  // // console.log(start, ' ', nums[start])
  // const result = []
  // result.push(nums[start] ** 2)

  // let leftIndex = start - 1
  // let rightIndex = start + 1

  // while (result.length != nums.length) {

  //   if (leftIndex < 0) {
  //     result.push(nums[rightIndex] ** 2)
  //     rightIndex += 1
  //   } else if (rightIndex >= nums.length) {
  //     result.push(nums[leftIndex] ** 2)
  //     leftIndex -= 1
  //   } else {
  //     if (Math.abs(nums[leftIndex]) < Math.abs(nums[rightIndex])) {
  //       result.push(nums[leftIndex] ** 2)
  //       leftIndex -= 1
  //     } else {
  //       result.push(nums[rightIndex] ** 2)
  //       rightIndex += 1
  //     }
  //   }
  // }
  const result = new Array(nums.length)
  let left = 0
  let right = nums.length - 1
  let index = nums.length - 1


  while (right >= left) {
    let leftValue = nums[left] ** 2
    let rightValue = nums[right] ** 2
  
    if (leftValue > rightValue) {
      result[index] = leftValue
      left ++
    } else {
      result[index] = rightValue
      right --
    }

    index --
  }

  return result
}

console.log(betterSortedSquares([-4,-4,-3]))
console.log(betterSortedSquares([1,2,3,4]))
console.log(betterSortedSquares([-7,-3,2,3,11]))
console.log(betterSortedSquares([0, 2]))
console.log(betterSortedSquares([-4,-1,0,3,10]))
console.log(betterSortedSquares([2,3,3,4]))
console.log(betterSortedSquares([-5,-3,-2,-1]))
console.log(betterSortedSquares([1,2]))
console.log(betterSortedSquares([-10000,-9999,-7,-5,0,0,10000]))
console.log(betterSortedSquares([-2,0]))
console.log(betterSortedSquares([-10,-3,-2,-2,-2,1,3,3,4,8]))